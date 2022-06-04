---
title: 'Angular (11+) from Scratch to an Expert '
date: '2022-06-04'
image: angular.png
excerpt: A complete guide for learning Angular deeply, through different tasks and exercises. Problems resolutions and Apis consumming. 🏆
isFeatured: false
---

**Course content**: 📗

More than **400 lections and 44 hours** making new Apps and testing them. Modules creations, services, deploys, and so on. A strong Angular course.

_Key topics_:

- TypeScript
- Components
- Directives
- Services
- Modules -
- Pipes
- Routing
- LazyLoad
- Route protection
- Maps
- API Consumming
- CRUD
- SPA
- Git and Github
- Deploying
- Node
- Prime NG
- Material design

---

## A service, one of the strongest tool in Angular 🤗

```js
export class WebServicesService {

  public movie: string;
  private history: string[] = [];
  get myHistory() {
    return [...this.history];
  }
  constructor(private http: HttpClient) {
    if (localStorage.getItem('history')) {
      this.history = JSON.parse(localStorage.getItem('history'));
    }
  }
  getList() {
    return this.http.get<FilmResponse>(
      'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json'
    );
  }
  dataParser(list: Film[]) {
    return list.map(
      ({ title, description, programType, images, releaseYear }) => ({
        return: {
          title,
          description,
          programType,
          images: images['Poster Art'],
          releaseYear,
        },
      })
    );
  }
  filmType(list: any[], type: string): ArrayResponse[] {
    return list.filter((film) => film.return.programType === type);
  }
  card(list: any[], title: string): ArrayResponse[] {
    return list.filter((film) => film.return.title === title);
  }
  searcher(search: string) {
    this.history.unshift(search);
    this.history = this.history.splice(0, 1);
    localStorage.setItem('history', JSON.stringify(this.history));
  }
}

```

---

## An App built during this course 😲

_Gif app, where you can find the Git that you want to use._

you can visit this App here 👉👉👉 [**webSite**](https://lorenzpgifapp.netlify.app/)

![Create routes via your file + folder structure](gifApp.png)
