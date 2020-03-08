# **My Weather App**

* [Liste des fonctionnalités](#Fonctionnalités)
* [Wireframes](#Wireframes)
* [Création du projet](#Project)
* [Build sur mobile](#Mobile)
* [Création des modules](#Modules)
* [Création des components](#Components)
* [Déclarer les components](#Declaration)
* [Import des modules](#Imports)
* [Création des routes](#Routes)
* [Affichage de tous les components](#Affichage)
* [Création du dossier shared](#Shared)
    * [Module](##Module)
    * [Model](##Model)
        * [Dictionnaire de données](###Dictionnaire-de-données)
        * [Création des classes](###Class)
    * [Service](##Service)
        * [API](###API)
        * [Set Up Value](###Set-Up-Value)



# Fonctionnalités

* Météo pour ville actuelle (géolocalisation)
* Affichage changeant selon météo et heure
* Prévision de la météo sur 5 jours
* Liste des villes saisies
* Supprimer une ville de la liste
* Sauvegarder la liste des villes (imposer une limite)
* Click sur une ville de la liste = new request

# Wireframes

Voir schémas

Météo : 
* Nom
* Temp actuelle
* Description
* Image/icone selon météo
* Vent
* Humidité
* Prévision sur 5 jours

Liste des villes :
* Nom des villes
* Barre de recherche

# Project

1) npm init
    if fail with powershell -> [GIT BASH](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal)
2) npm install
3) npm install ionic
4) ./node_modules/.bin/ionic start
    * Project Name
    * Framework (Angular)
    * Starter Template (blank)
5) Ouvrir dossier du project dans VS Code (weather-app)
6) npm i ionic --save-dev (installation en tant qu'outil de dev)
7) Ajout du script "ionic":"ionic" dans package.json
8) npm run ionic (liste des commandes dispos)
9) modif du script "start":"ionic serve" (évite mauvaise url)
10) npm start (lance le serveur, permet l'ouverture dans le navigateur)

# Mobile

1) npm i cordova --save-dev
2) npm run ionic cordova prepare android
    * plateform not installed, would you like to install ? -> Y
3) Personnaliser le config.xlm
    * name
    * description
    * author (mail and content)
4) npm i native-run --save-dev
5) npm run ionic cordova run android --device

# Modules

1 url = 1 module
* Affichage météo = /weather
* Liste des villes + barre de recherche = /cityList

Créer un module :
```ts
npm run ng g m foo
```

1 module = 1 routing module

Créer un routing.module :
```ts
./node_modules/.bin/ng g m foo-routing --flat
```

# Components

Pour créer un component :
```ts
npm run ng c bar
```

* Weather :
    * weather.component
    * city :
        * city.component
    * forecast :
        * forecast.component

* City-List :
    * city-list.component
    * searchbar :
        * searchbar.component

# Declaration

Dans chaque modules, il faut déclarer les components qui lui appartiennent

* Weather Module :
    * weather.component
    * city.component
    * forecast.component
    ```ts
    declarations: [
    WeatherComponent,
    ForecastComponent,
    CityComponent
    ],
    ```

* CityList Module :
    * city-list.component
    * searchbar.component
    ```ts
    declarations: [
    SearchbarComponent,
    CityListComponent
    ],
    ```

# Imports

 Dans chaques routing.modules :

 ```ts
imports: [
    CommonModule,
    AppRoutingModule
]
 ```
AppRoutingModule doit rester en dernière position si déclaration d'un "redirectTo" (évite les redirections automatiques).

Dans app.module, import de tous les .modules :
```ts
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    WeatherModule,
    CityListModule,
    AppRoutingModule
  ],
```

Attention à bien utiliser l'auto-import.

# Export

Dans app-routing.module :
```ts
  exports: [RouterModule]
```

# Routes

Dans app-routing.module :

```ts
const routes:Routes =[
    {
        path: "weather", component: WeatherComponent
    },
    {
        path: "city-list", component: CityListComponent
    }
    {
        path: "**", redirectTo:"weather"
    }
]
```

# Affichage

1) Déclarer la balise <router-outlet></router-outler> dans app.component.html
2) Pour que tous les components soient affichés, penser à déclarer leur balises dans le .html :
* Weather Component
    ```html
    <app-city> </app-city>
    <!-- <div>Contenu propre à Weather Component</div> -->
    <app-forecast> </app-forecast>
    ```
    
* City List
    ```html
    <app-searchbar></app-searchbar>
    <!-- <div>Contenu propre à CityList Component</div> -->
    ```

# Shared

## Module

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    IonicModule,
  ]
})
export class SharedModule { }
```

## Model

### Dictionnaire de données

* Weather :
    * nom de la ville
    * icon selon météo
    * description
    * temperature actuelle
    * vent
    * humidité
    * prévision sur 5 jours
        * date
        * temperature
        * icon
        * description

* CityList :
    * liste des noms de villes déjà recherchées

### Class

Pour créer une class :
```ts
npm run ng g class shared/model/baz
```

* Weather :
 * class Weather :
    * name: string
    * icon: string
    * description: string
    * temperature: number
    * wind: number
    * humidity: number

* class Forecast :
    * date: number
    * icon: string
    * description: string
    * temperature: number

## Service

### API

* Get By Name
    * Current Weather
    * Forecast
* Get By Geoloc
    * Current Weather
    * Forecast

### Set Up Value

* City Model
* Forecast Model
* City List []