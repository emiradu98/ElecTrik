# ElecTrik

## About / Synopsis

* DAWJS Faculty of Computer Scrience Iasi
* Project status: incipient

## Table of contents

> * [ElecTrik](#electrik)
>   * [About / Synopsis](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Requirements](#requirements)
>     * [Screenshots](#screenshots)
>     * [Features](#features)
>   * [Code](#code)
>     * [Content](#content)
>     * [Requirements](#requirements)
>     * [Limitations](#limitations)
>     * [Build](#build)
>     * [Deploy (how to install build product)](#deploy-how-to-install-build-product)
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)
>   * [Contributing / Reporting issues](#contributing--reporting-issues)
>   * [License](#license)
>   * [About Nuxeo](#about-nuxeo)

## Installation

Installation

* Installing Frond-End from the command line: `npm i`
* Running Front-End from the command line: `npm start`

## Requirements
* Sa se realizeze un mash-up Web menita sa gestioneze in timp-real a fluxurile de activitati dintr-un lant de furnizori de energie, baterii si acumulatori speciali pentru drone, biciclete si autoturisme electrice. Minimal, se vor oferi: posibilitatea de a monitoriza de la distanta stocul de baterii, de a rezolva plata energiei livrate, de a notifica anumiti clienti fideli asupra schimbarilor survenite -- de exemplu, modificari de pret, indisponibilitatea unui tip de baterie/acumulator pentru o anumita marca, oferte privind accesorii speciale etc. Noutatile vizand ofertele vor fi redate via notificari in navigatorul Web. Localizarea acestor statii de furnizare de energie electrica va putea fi semnalata pe harta via un serviciu Web cartografic precum OpenStreetMap. De asemenea, se vor oferi rapoarte si vizualizari atractive privitoare la stocurile de baterii/acumulatori, inclusiv situatia vanzarilor per sortiment, perioada de timp sau in functie de un anumit client.

### Screenshots

* Incoming

### Features

## Code

[![Build Status](https://qa.nuxeo.org/jenkins/buildStatus/icon?job=/nuxeo/addons_nuxeo-sample-project-master)](https://qa.nuxeo.org/jenkins/job/nuxeo/job/addons_nuxeo-sample-project-master/)

### Content

Description, sub-modules organization...

### Requirements

See [CORG/Compiling Nuxeo from sources](http://doc.nuxeo.com/x/xION)

Sample: <https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/README.md>

### Limitations

Sample: <https://github.com/nuxeo-archives/nuxeo-features/tree/master/nuxeo-elasticsearch>

### Build

    mvn clean install

Build options:

* ...

### Deploy (how to install build product)

Direct to MP package if any. Otherwise provide steps to deploy on Nuxeo Platform:

 > Copy the built artifacts into `$NUXEO_HOME/templates/custom/bundles/` and activate the `custom` template.

## Resources (Documentation and other links)

## Contributing / Reporting issues

Link to JIRA component (or project if there is no component for that project). Samples:

* [Link to component](https://jira.nuxeo.com/issues/?jql=project%20%3D%20NXP%20AND%20component%20%3D%20Elasticsearch%20AND%20Status%20!%3D%20%22Resolved%22%20ORDER%20BY%20updated%20DESC%2C%20priority%20DESC%2C%20created%20ASC)
* [Link to project](https://jira.nuxeo.com/secure/CreateIssue!default.jspa?project=NXP)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

## About Nuxeo

Nuxeo Content Platform is an open source Enterprise Content Management platform, written in Java. Data can be stored in both SQL & NoSQL databases.

The development of the Nuxeo Content Platform is mostly done by Nuxeo employees with an open development model.

The source code, documentation, roadmap, issue tracker, testing, benchmarks are all public.

Typically, Nuxeo users build different types of information management solutions for [document management](https://www.nuxeo.com/products/document-management/), [case management](https://www.nuxeo.com/products/case-management/), and [digital asset management](https://www.nuxeo.com/products/digital-asset-management/), use cases. It uses schema-flexible metadata & content models that allows content to be repurposed to fulfill future use cases.

More information is available at [www.nuxeo.com](http://www.nuxeo.com).
