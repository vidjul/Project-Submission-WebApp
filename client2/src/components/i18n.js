import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
          home: { label: 'Home', },
          projects: { label: 'Projects', },
          submit: { label: 'Submit a project', },
          login: {label: 'Log in', },
          admin: {label: 'Admin', },
          linkLost: {label: 'Project link lost', }
        },
      },
      fr: {
        translation: {
            home: { label: 'Accueil', },
            projects: { label: 'Projets', },
            submit: { label: 'Soumettre un projet', },
            login: {label: 'Se connecter', },
            admin: {label: 'Admin', },
            linkLost: {label: 'Lien oublié', }
        },
      },
    },
  })

export default i18next