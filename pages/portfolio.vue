<template>
  <section class="portfolio" id="portfolio">
    <h2 class="title portfolio__title">Портфолио</h2>
    <!--<div class="portfolio__card">
      <h3 class="title portfolio__image-title">Учебная страница</h3>
      <a href="https://ivancen.github.io/yandex__project_learn-to-learn/" class="link">
        <img class="portfolio__image" src="images/learn.png" alt="Учебные книги"/>
      </a>
      <a href="https://github.com/IvanCen/yandex__project_learn-to-learn" class="portfolio__link">githab</a>
    </div>
    <div class="portfolio__card">
      <h3 class="title portfolio__image-title">Проект Место</h3>
      <a href="https://ivancen.github.io/yandex__project_mesto/" class="link">
        <img class="portfolio__image" src="images/polka.jpg" alt="Картинка проекта Mesto"/>
        <q class="portfolio__quote">Настоящая страна не в выпусках новостей, а здесь.</q>
      </a>
      <a href="https://github.com/IvanCen/yandex__project_mesto" class="portfolio__link">githab</a>
    </div>
    <div class="portfolio__card">
      <h3 class="title portfolio__image-title">Сервис Место</h3>
      <a href="https://ivancen.github.io/yandex__project_mesto-photo/" class="link">
        <img class="portfolio__image" src="images/cover.jpg" alt="Проект Место для фотографий"/>
        <p class="portfolio__text">Место для Российских фото</p>
      </a>
      <a href="https://github.com/IvanCen/yandex__project_mesto-photo" class="portfolio__link">githab</a>
    </div>
    <div class="portfolio__card">
      <h3 class="title portfolio__image-title">Инклюзивный музей</h3>
      <a href="https://ivancen.github.io/museum_project/" class="link">
        <img class="portfolio__image" src="images/musem.jpg" alt="Проект Инклюзивный Музей"/>
        <p class="portfolio__text">Музей для всех</p>
      </a>
      <a href="https://github.com/IvanCen/museum_project" class="portfolio__link">githab</a>
    </div>-->
    <div v-for="card in cards" :key="card.id" class="portfolio__card">
      <h3 class="title portfolio__image-title">{{ card.title }}</h3>
      <a :href="card.demoLink">
        <img class="portfolio__image" :src="card.image" alt="фото проекта" />
        <p class="portfolio__text">{{ card.text }}</p>
      </a>
      <a :href="card.githubLink" class="portfolio__link">github</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Учебная страница',
          text: '',
          image: './../images/learn.png',
          demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
          githubLink:
            'https://github.com/IvanCen/yandex__project_learn-to-learn',
        },
        {
          id: 2,
          title: 'Проект Место',
          text: 'Настоящая страна не в выпусках новостей, а здесь.',
          image: './../images/polka.jpg',
          demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
          githubLink:
            'https://github.com/IvanCen/yandex__project_learn-to-learn',
        },
        {
          id: 3,
          title: 'Сервис Место',
          text: 'Место для Российских фото',
          image: './../images/cover.jpg',
          demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
          githubLink:
            'https://github.com/IvanCen/yandex__project_learn-to-learn',
        },
        {
          id: 4,
          title: 'Инклюзивный музей',
          text: 'Музей для всех',
          image: './../images/musem.jpg',
          demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
          githubLink:
            'https://github.com/IvanCen/yandex__project_learn-to-learn',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio {
  background-color: #f6f6f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-bottom: 40px;
  }

  &__link {
    align-self: flex-end;

    &:hover {
      color: #4c4c4c;
    }
  }

  &__link-text {
    width: 200px;
    font-size: 32px;
    text-align: center;
    margin-top: 50px;
    color: black;
  }

  &__link-text:after {
    transition: width 0.5s ease-in-out;
    width: 0;
    height: 1px;
    background-color: #000000;
    display: block;
    content: '';
  }

  &__link-text:hover:after {
    width: 100%;
  }

  &__title {
    font-size: 36px;
    margin-top: 35px;
    margin-bottom: 35px;
    padding-bottom: 10px;
    border-bottom: #000000 solid 2px;
    text-align: center;
    width: 100%;
  }

  &__text {
    margin-bottom: 10px;
  }

  &__image-title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  &__image {
    width: 100%;
    max-width: 800px;
    transition: opacity ease-in 0.2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 10px;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
