<?php
session_start();
if(!isset($_SESSION['connected']) || !$_SESSION['connected']){
    header('Location: ../index.html');
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Admin Dashbord html and css</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="css/index-admin.css" />
        <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />
    </head>
    <body>
        <!-- <input type="checkbox" id="menu" name="" />
        <div class="sidebar">
            <div class="sidebar-brand">
                <h2><span class="fa fa-user-o"></span>Learn Programming</h2>
            </div>

            <div class="sidebar-menu">
                <ul>
                    <li>
                        <a href="" class="active"
                            ><span class="fa fa-home"></span
                            ><span>Accueil</span></a
                        >
                    </li>
                </ul>
            </div>
        </div> -->

        <div class="content">
            <header>
                <!-- <p>
                    <label for="menu"><span class="fa fa-bars"></span></label
                    ><span class="accueil">Accueil</span>
                </p>

                <div class="search-wrapper">
                    <span class="fa fa-search"></span>
                    <input type="search" name="" placeholder="recherche" />
                </div> -->

                <div class="user-wrapper" id="dropdown">
                    <div>
                        <a href="index.php" class="dropdown-toggle"
                            ><p>
                                <button class="btn">
                                    Inscription
                                    <span class="fa fa-arrow-right"></span>
                                </button></p
                        ></a>
                        <button class="btn">
                            <a href='logout.php'>Déconnexion<span class="fa fa-arrow-right"></span></a>
                        </button>
                    </div>
                </div>
            </header>

            <main>
<!--                 
                <div class="cards">
                    <div class="card-single">
                        <div>
                            <h2>2.000.000</h2>
                            <small>Ventes</small>
                        </div>
                        <div>
                            <span class="fa fa-shopping-cart"></span>
                        </div>
                    </div>

                    <div class="card-single">
                        <div>
                            <h2>+30</h2>
                            <small>Stock</small>
                        </div>
                        <div>
                            <span class="fa fa-newspaper-o"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div>
                            <h2>58</h2>
                            <small>Fournisseur</small>
                        </div>
                        <div>
                            <span class="fa fa-outdent"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div>
                            <h2>20k</h2>
                            <small>Communauté</small>
                        </div>
                        <div>
                            <span class="fa fa-group"></span>
                        </div>
                    </div>
                </div>

                <div class="composant">
                    <div class="ventes">
                        <div class="case">
                            <div class="header-case">
                                <h2>Listes produits</h2>
                                <button class="button">
                                    voir plus<span
                                        class="fa fa-arrow-right"
                                    ></span>
                                </button>
                            </div>
                            <div class="body-case">
                                <div class="tableau">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>First</td>
                                                <td>Last</td>
                                                <td>Handle</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <span
                                                        class="status-produit color-one"
                                                    ></span
                                                    >@mdo
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>
                                                    <span
                                                        class="status-produit color-two"
                                                    ></span
                                                    >@fat
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Larry the Bird</td>
                                                <td>@twitter</td>
                                                <td>
                                                    <span
                                                        class="status-produit color-three"
                                                    ></span
                                                    >@twitter
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Larry the Bird</td>
                                                <td>@twitter</td>
                                                <td>
                                                    <span
                                                        class="status-produit color-four"
                                                    ></span
                                                    >@twitter
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Larry the Bird</td>
                                                <td>@twitter</td>
                                                <td>
                                                    <span
                                                        class="status-produit color-five"
                                                    ></span
                                                    >@twitter
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stock">
                        <div class="case">
                            <div class="header-case">
                                <h2>Clients Fidèles</h2>
                            </div>
                            <div class="body-case">
                                <div class="all-users">
                                    <div class="infos">
                                        <img
                                            src="images/pp.jpg"
                                            width="30"
                                            height="30"
                                        />
                                        <div>
                                            <h4>Omar</h4>
                                            <small>Embulant</small>
                                        </div>
                                    </div>

                                    <div class="user-contact">
                                        <span class="fa fa-facebook"></span>
                                        <span class="fa fa-whatsapp"></span>
                                        <span class="fa fa-phone"></span>
                                    </div>
                                </div>

                                <div class="all-users">
                                    <div class="infos">
                                        <img
                                            src="images/pp.jpg"
                                            width="30"
                                            height="30"
                                        />
                                        <div>
                                            <h4>Omar</h4>
                                            <small>Embulant</small>
                                        </div>
                                    </div>

                                    <div class="user-contact">
                                        <span class="fa fa-facebook"></span>
                                        <span class="fa fa-whatsapp"></span>
                                        <span class="fa fa-phone"></span>
                                    </div>
                                </div>

                                <div class="all-users">
                                    <div class="infos">
                                        <img
                                            src="images/pp.jpg"
                                            width="30"
                                            height="30"
                                        />
                                        <div>
                                            <h4>Omar</h4>
                                            <small>Embulant</small>
                                        </div>
                                    </div>

                                    <div class="user-contact">
                                        <span class="fa fa-facebook"></span>
                                        <span class="fa fa-whatsapp"></span>
                                        <span class="fa fa-phone"></span>
                                    </div>
                                </div>

                                <div class="all-users">
                                    <div class="infos">
                                        <img
                                            src="images/pp.jpg"
                                            width="30"
                                            height="30"
                                        />
                                        <div>
                                            <h4>Omar</h4>
                                            <small>Embulant</small>
                                        </div>
                                    </div>

                                    <div class="user-contact">
                                        <span class="fa fa-facebook"></span>
                                        <span class="fa fa-whatsapp"></span>
                                        <span class="fa fa-phone"></span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn">
                                voir plus<span class="fa fa-arrow-right"></span>
                            </button>
                        </div>
                    </div>

                    <div class="statistique">
                        <div class="statistique-barre bar1"></div>
                        <div class="statistique-barre bar2"></div>
                        <div class="statistique-barre bar3"></div>
                        <div class="statistique-barre bar4"></div>
                        <div class="statistique-barre bar5"></div>
                        <div class="statistique-barre bar6"></div>
                        <div class="statistique-barre bar5"></div>
                        <div class="statistique-barre bar6"></div>
                        <div class="statistique-barre bar5"></div>
                        <div class="statistique-barre bar6"></div>
                        <div class="statistique-barre bar4"></div>
                        <div class="statistique-barre bar5"></div>
                        <div class="statistique-barre bar6"></div>
                    </div>
                    <div class="legende">
                        <h4>Legende</h4>
                        <table>
                            <tr>
                                <td>
                                    <span class="evolution color-one"></span>Riz
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="evolution color-two"></span>Mil
                                </td>
                            </tr>
                        </table>
                        <div class="txt-deco">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                        </div>
                    </div>
                </div>

                <div class="calendar">
                    <div class="mois-annee">
                        <ul>
                            <li class="prev">&#10094;</li>
                            <li class="next">&#10095;</li>
                            <li>Avril<br /><span>2021</span></li>
                        </ul>
                    </div>

                    <ul class="mois">
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                        <li>Su</li>
                    </ul>

                    <ul class="jours">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li><span class="active">10</span></li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li></li>
                    </ul>
                </div> -->
            </main>
        </div>
    </body>
</html>