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
          linkLost: {label: 'Project link lost', },
          year: {label: 'Year',},
          partner: {label: 'Proposed by',},
          keywords: {label:'Keywords',},
          comment:{label:'Comments',},
          question:{label:'Feel free to ask your questions ',},
          questionH:{label:'Ask your question ! ',},
          button:{label:'Send ',},
          project:{ title:'List of projects',},
          major:{label:'Major',},
          filter:{label:'Filters',},
          ibo:{label:'Computer science, Big Data and IoT',}
        },
      },
      fr: {
        translation: {
            home: { label: 'Accueil', },
            projects: { label: 'Projets', },
            submit: { label: 'Soumettre un projet', },
            login: {label: 'Se connecter', },
            admin: {label: 'Admin', },
            linkLost: {label: 'Lien oublié', },
            year: {label: 'Année',},
            partner:{label:'Proposé par',},
            keywords:{label:'Mots-clés',},
            comment:{label:'Commentaires',},
            question:{label:'Posez votre question',},
            questionH:{label:'Posez une question ! ',},
            button:{label:'Envoyer',},
            project:{ title:'Liste des projets',},
            major:{label:'Majeure', },
            filter:{label:'Filtres',},
            ibo:{label:'Informatique, BigData et objets connectés',}
        },
      },
    },
  })

export default i18next