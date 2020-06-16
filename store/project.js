import axios from '~/.nuxt/axios'

export const state = () => ({
  cards: [
    {
      id: 1,
      title: 'Учебная страница',
      text: '',
      image: './../images/learn.png',
      demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
      githubLink: 'https://github.com/IvanCen/yandex__project_learn-to-learn',
    },
    {
      id: 2,
      title: 'Проект Место',
      text: 'Настоящая страна не в выпусках новостей, а здесь.',
      image: './../images/polka.jpg',
      demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
      githubLink: 'https://github.com/IvanCen/yandex__project_learn-to-learn',
    },
    {
      id: 3,
      title: 'Сервис Место',
      text: 'Место для Российских фото',
      image: './../images/cover.jpg',
      demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
      githubLink: 'https://github.com/IvanCen/yandex__project_learn-to-learn',
    },
    {
      id: 4,
      title: 'Инклюзивный музей',
      text: 'Музей для всех',
      image: './../images/musem.jpg',
      demoLink: 'https://ivancen.github.io/yandex__project_learn-to-learn/',
      githubLink: 'https://github.com/IvanCen/yandex__project_learn-to-learn',
    },
  ],
  lessons: [],
})

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value)
  },
}

export const getters = {
  getProjectCards(state) {
    return state.cards
  },
}

/*export const actions = {
  fetchLessons(state) {
    return axios.get('https://api-test.pa7lux.ru/streams')
      .then((res) => {
        return state.commit('setState', {
          name: 'lessons',
          value: res.data
        })
      })
  }
}*/

export const actions = {
  async fetchLessons({ commit }) {
    const lessons = await this.$axios.$get('https://api-test.pa7lux.ru/streams')
    console.log(lessons)
    commit('setState', {
      name: 'lessons',
      value: lessons,
    })
  },
}
