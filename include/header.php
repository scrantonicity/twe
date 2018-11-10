<!DOCTYPE html>

<html lang="en" ng-app="eventsApp">

<!-- css and js links go in here -->

<head>
  <meta charset="utf-8">
  <meta name="author" content="Dylan Hyun">
  <meta name="keywords" content="Tartan Wind Ensemble, Carnegie Mellon, Pittsburgh, TWE, CMU, Carnegie Mellon University">
  <meta name="CMU Tartan Wind Ensemble">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Tartan Wind Ensemble</title>

  <link rel="icon" href="./assets/logo.png" type="image/png" sizes="16x16">


  <!-- %%%% STYLES %%%% -->

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous">

  <!-- Icons -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
    crossorigin="anonymous">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet">

  <!-- General App Styles -->
  <link rel="stylesheet" media="all" type="text/css" href="./css/app.css">
  <link rel="stylesheet" media="all" type="text/css" href="./components/navbar/navbar.css">
  <link rel="stylesheet" media="all" type="text/css" href="./components/header/header.css">
  <link rel="stylesheet" media="all" type="text/css" href="./components/timer/timer.css">
  <link rel="stylesheet" media="all" type="text/css" href="./components/footer/footer.css">
  <link rel="stylesheet" media="all" type="text/css" href="./components/accordion/accordion.css">
  <link rel="stylesheet" media="all" type="text/css" href="./components/event_card/event_card.css">

  <!-- %%%% END STYLES %%%% -->

  <!-- %%%% SCRIPTS %%%% -->

  <!-- Angular -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.10/angular.min.js"></script>

  <!-- jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <!-- Boostrap -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
    crossorigin="anonymous"></script>

  <!-- General App Scripts -->
  <script src="../js/events.js"></script>
  <!-- <script src="./components/timer/timer.js"></script> -->

  <!-- %%%% END SCRIPTS %%%% -->

</head>

<body>

  <div class="container">

    <div class="row pl-3" id="header">
      <h1 class="m-0">Carnegie Mellon Tartan Wind Ensemble</h1>
    </div>
    <div class="title-bar title-bar-desktop row navbar navbar-default sticky-top d-none d-lg-flex justify-content-center align-items-center">
      <div class="container">
        <div class="title-bar-row row">
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu" href="about.html">About</a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu" href="contact.html">Contact</a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center" id="logo">
            <a href="index.html">
              <img class="logo" src="./assets/logo.png" alt="Tartan Wind Ensemble Logo">
            </a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu" href="https://calendar.google.com/calendar/embed?src=cmutwe%40gmail.com&ctz=America%2FNew_York">Calendar</a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu " id="members" href="members.html">Members</a>
          </div>
        </div>
      </div>
    </div>
    <div class="title-bar title-bar-tablet row navbar navbar-default sticky-top d-none d-md-flex d-lg-none justify-content-center align-items-center">
      <div class="container">
        <div class="title-bar-row title-bar-tablet row">
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu" href="about.html">About</a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu" href="contact.html">Contact</a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center" id="logo">
            <a href="index.html">
              <img class="logo" src="./assets/logo.png" alt="Tartan Wind Ensemble Logo">
            </a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu" href="https://calendar.google.com/calendar/embed?src=cmutwe%40gmail.com&ctz=America%2FNew_York">Calendar</a>
          </div>
          <div class="col nav-select d-flex justify-content-center align-items-center">
            <a class="menu " id="members" href="members.html">Members</a>
          </div>
        </div>Î
      </div>
    </div>
    <div class="title-bar title-bar-mobile row navbar navbar-default d-md-none d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="title-bar-row title-bar-mobile row ">
          <a class="menu btn btn-block" href="index.html">Home</a>
          <a class="menu btn btn-block" href="about.html">About</a>
          <a class="menu btn btn-block" href="contact.html">Contact</a>
          <a class="menu btn btn-block" href="https://calendar.google.com/calendar/embed?src=cmutwe%40gmail.com&ctz=America%2FNew_York">Calendar</a>
          <a class="menu btn btn-block" href="members.html">Members</a>
        </div>
      </div>
    </div>
