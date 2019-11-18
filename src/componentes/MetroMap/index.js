import React from 'react';
import alertify from 'alertifyjs';
import {withRouter} from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import axios from 'axios'
import Loading from '../Loading';

const colors = {
    black: "#333",
    white: '#fefefe',
    disabled: '#666',
    enabled: '#000',
    red: '#fa3d17',
    blue: '#0250a5',
    green: '#00805c',
    yellow: '#fad50b',
    status: {
        ok: '#23e682',
        error: '#fa0d81',
    }
}

const screen = {
    w: 750,
    h: 450
}

class Line{
    constructor(p, number, color, stations){
        this.p = p;
        this.gui = p.createGraphics(screen.w, screen.h);
        this.number = number;
        this.color = color;
        this.wasPressedAlready = false;

        this.stations = stations; 
    }

    draw = (history) => {
        const p = this.p;
        const gui = this.gui;
        const spacing = screen.h / 4.25;
        const sideSpacing = 30;
        const stationSpacing = 35;
        const lineStroke = 30;

        const y = spacing * this.number;

        p.stroke(this.color);
        p.strokeWeight(lineStroke);

        p.line(
            sideSpacing,
            y,
            stationSpacing * (this.stations.length + 1) - sideSpacing,
            y
        );

        const numX = (this.stations.length + 1) * stationSpacing + 5;
        p.push();

        p.noStroke();
        p.fill(this.color);
        p.ellipse(numX, y, lineStroke, lineStroke);

        p.fill(colors.white);
        p.textAlign(p.CENTER, p.CENTER);
        p.textStyle(p.BOLD);
        p.text(this.number, numX, y);

        p.pop();

        const mappedStations = this.stations.map((station, index) => {

            const x = stationSpacing * (index + 1);

            const {mouseX, mouseY} = p;
            const hoverRadius = 25;

            const onHoverX = mouseX > x - hoverRadius/2 && mouseX < x + hoverRadius/2;
            const onHoverY = mouseY > y - hoverRadius/2 && mouseY < y + hoverRadius/2;
            const onHover = onHoverX && onHoverY;

            return {
                id: station.id,
                totems: station.totems,
                name: station.name,
                enabled: station.enabled,
                status: station.status,
                x,
                y,
                hoverRadius,
                onHover,
            }
        })

        mappedStations.forEach((station, index) => {
            const {x, y, hoverRadius, onHover} = station;
            const strokeWeight = 10;
            const radius = 20;
            const rotation = -36;

            p.strokeWeight(strokeWeight);
            p.stroke(this.color);
            p.fill(255);
            p.ellipse(
                x,
                y,
                onHover ? hoverRadius : radius,
                onHover ? hoverRadius : radius
            );
            p.noStroke();
            p.fill(station.enabled ? colors.enabled : colors.disabled);
            p.textStyle(p.BOLD);

            p.push();
            p.translate(x,y - 20);
            p.rotate(p.radians(rotation));
            if(station.status != 'normal'){
                p.fill(255,0,0);
            }
            p.text(station.name, 0, 0);
            p.textStyle(p.NORMAL);
            p.pop();
        })

        gui.clear();
        mappedStations.forEach((station, index) => {
            const {onHover, x, y, name, totems, enabled} = station;

            const tooltip = {
                padding: 8,
                w: 150,
                h: 100,
                headerH: 25,
            }
            const pd = tooltip.padding;

            const anchor = {
                x: screen.w > x + tooltip.w ? x : x - tooltip.w,
                y: screen.h > y + tooltip.h ? y : y - tooltip.h,
            }

            if(onHover && p.mouseIsPressed){
                if(station.enabled){
                    history.push('/line/'+station.id);
                }else if(!this.wasPressedAlready){
                    alertify.error("Esta estação está desabilitada.");
                }
            }
            if(onHover && enabled){
                gui.stroke(this.color);

                gui.fill(colors.black);
                gui.rect(anchor.x, anchor.y, tooltip.w, tooltip.h);

                gui.fill(this.color);
                gui.rect(anchor.x, anchor.y, tooltip.w, tooltip.headerH);

                gui.fill(colors.white);
                gui.textAlign(p.LEFT, p.TOP);
                gui.text(name, anchor.x + pd, anchor.y + pd);

                totems.forEach((totem, index) => {
                    const totemX = anchor.x + pd;
                    const totemY = anchor.y + 15 * index + tooltip.headerH + pd;
                    gui.noStroke();
                    gui.fill(totem.enabled ? colors.status.ok : colors.status.error);
                    gui.ellipseMode(p.CORNER);
                    gui.ellipse(totemX, totemY, 10, 10);
                    gui.text(totem.name, totemX + pd * 2, totemY);
                });
            }
        })
            console.log(this.wasPressedAlready);
            if(p.mouseIsPressed){
                this.wasPressedAlready = true;
            }else{
                this.wasPressedAlready = false;
            }


    }

    drawGUI(history){
        //this.p.image(this.gui, 0, 0);
    }
}

function sketch(p, history, dataFromDatabase){

    const generateTotems = () => {
        return new Array(Math.floor(Math.random() * 4 + 1))
            .fill({})
            .map((t, index) => ({ 
                enabled: Math.random() < .5,
                name: `Totem ${index + 1}`
            }))
    }

    const mapSource = (data, index) => {
        const enabled = Math.random() > .5;
        const totems = enabled ? generateTotems() : [];
        return {
            id: data.id,
            name: data.name,
            enabled: data.active, 
            status: data.status,
            totems
        }
    }

    const whereDataComesFrom = dataFromDatabase || [];
    console.log('whereDataComesFrom', whereDataComesFrom)
    //const whereDataComesFrom = stationSource;
    const source = whereDataComesFrom.map( line => ({
        name: line.name,
        data: line.stations.map(mapSource),
        color: line.color,
        number: line.number,
    }))
    
    const lines = source.map( (line, index) => 
        new Line(p, line.number, line.color, line.data)
    ) 

    p.setup = () => {
        p.createCanvas(screen.w, screen.h);
        p.noStroke();
    }

    p.draw = () => {
        p.background('#fefefe');
        lines.forEach( line => line.draw(history) );
        lines.forEach( line => line.drawGUI(history) );
    }
}

function MetroMap({history}){
    const [dataFromDatabase, setDataFromDatabase] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function receberLinhas(){
            const res = await axios.get('http://localhost:4550/home');
            console.log('response',res.ok, res.data)
            if(res.data) {
                setDataFromDatabase(res.data);
            }
            setLoading(false);
        }
        receberLinhas()
    }, [])
    return (
        <div style={{display: 'flex', justifyContent:'center', margin: 16, alignItems: 'center'}}>
            <Loading is={loading}>Carregando estações...</Loading>
            {!loading && <P5Wrapper sketch={p =>  sketch(p, history, dataFromDatabase)}/>}
        </div>
    )
}

export default withRouter(MetroMap);
