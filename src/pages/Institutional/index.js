import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

export default function Institutional(){
    return (
        <>
            <header>
                <nav class="bg-primary">
                    <ul>
                        <li><a href="index.html" class="nav-brand"><b class="text-bold">monitor</b>easy</a></li>
                        <li><a href="#area-2" class="btn-login text-primary bg-dark">Status</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Quem Somos</a></li>
                        <li><a href="">Produtos</a></li>
                        <li><a href="">Novidades</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section class="principal text-light">
                    <h1 class="principal-title text-light fadeIn"><b class="text-bold">monitor</b>easy</h1>
                    <div class="btn-login-principal bg-primary fade">Acessar Dashboard</div>
                </section>




                <section class="vantagens bg-dark text-light">

                    <header class="header-vantagens">
                        <h2 class="title"><b class="text-bold text-primary">lorem ipsum</b> dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem esse distinctio consectetur
                            quisquam,
                            exercitationem quae provident inventore architecto
                        </p>
                        <div class="btn-primary bg-secondary">saiba mais</div>
                    </header>


                    <div class="vantagens-item zoom" data-anime="left">
                        <img class="img-icon" src="img/upload.png" alt=""/>
                        <p class="number add">+325</p>
                        <p><b class="text-bold">lorem ipsum dolor sit amet</b> consectetur adipisicing elit. at fugiat</p>
                    </div>

                    <div class="vantagens-item zoom" data-anime="right">
                        <img class="img-icon" src="img/bar-chart (1).png" alt=""/>
                        <p class="number">+704</p>
                        <p><b class="text-bold">lorem ipsum dolor sit amet</b> consectetur adipisicing elit. at fugiat</p>
                    </div>
                </section>




                <section class="area-3 text-light">
                    <div data-anime="left">
                        <h2 class="title-area3">Sem pânico!</h2>
                        <p class="text-area3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                            assumenda nam atquequos iusto odio commodi sint labore voluptates ducimus nostrum sequi reiciendis totam ab, illum officiis
                            debitis modi aut.
                        </p>
                    </div>
                </section>




                <section class="area-2 text-light" id="area-2">


                    <div class="area-container">
                        <div class="img-container"> <img src="img/adult-analysis-chart-1516704.jpg" alt="/"
                            class="img-alternative" data-anime="left"/></div>
                        <div class="text-container">
                            <h2>INSIRA UM TÍTULO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis vitae quisquam quo
                                minima rerum, nesciunt repellat, atque ut magni perferendis veritatis, pariatur modi quidem.
                                Nobis quisquam similique tenetur numquam?</p>
                            </div>
                        </div>

                        <div class="area-container">

                            <div class="text-container">
                                <h2>INSIRA UM TÍTULO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis vitae quisquam quo
                                    minima rerum, nesciunt repellat, atque ut magni perferendis veritatis, pariatur modi quidem.
                                    Nobis quisquam similique tenetur numquam?</p>
                                </div>
                                <div class="img-container"> <img src="img/ballpen-blur-close-up-461077.jpg" alt="/"
                                    class="img-alternative" data-anime="right"/></div>
                                </div>

                                <div class="area-container">
                                    <div class="img-container"> <img src="img/accounting-analytics-apple-572056.jpg" alt="/"
                                        class="img-alternative" data-anime="left"/></div>
                                    <div class="text-container">
                                        <h2>INSIRA UM TÍTULO</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis vitae quisquam quo
                                            minima rerum, nesciunt repellat, atque ut magni perferendis veritatis, pariatur modi quidem.
                                            Nobis quisquam similique tenetur numquam?</p>
                                        </div>
                                    </div> 



                                </section>


                                <section class="area-4 text-light">
                                    <h1 class="text-primary area-4-title" data-anime="left">ALGUM TEXTO</h1>

                                    <p class="area-4-text" data-anime="right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus metus, platea viverra amet turpis
                                        duis
                                        tellus sed. Accumsan egestas non vestibulum iaculis in proin eleifend massa consectetur. Senectus
                                        vitae
                                        sed tristique nunc vitae vel a malesuada hac. At tincidunt orci fermentum, nascetur tellus pretium
                                        malesuada hac.
                                    </p>
                                </section>
                            </main>


    <footer class="bg-primary text-light">
        <div class="footer-container bg-secondary">

            <div class="footer-item">
                <h2 class="footer-title">LOREM IPSUM</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lectus metus, platea viverra amet turpis
                    duis tellus sed.</p>
            </div>

            <div class="footer-item">
                <h2 class="footer-title">LOREM IPSUM</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lectus metus, platea viverra amet turpis
                    duis tellus sed.</p>
            </div>

            <div class="footer-item">
                <h2 class="footer-title">LOREM IPSUM</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lectus metus, platea viverra amet turpis
                    duis tellus sed.</p>
            </div>

            <div class="footer-img-container">
                <img src="img/facebook.png" alt="" class="footer-img"/>
                <img src="img/youtube.png" alt="" class="footer-img"/>
                <img src="img/google-plus.png" alt="" class="footer-img"/>
                <img src="img/linkedin.png" alt="" class="footer-img"/>
            </div>


        </div>

    </footer>




                        </>
    )
}
