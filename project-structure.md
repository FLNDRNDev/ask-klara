/ask-klara
   /app
      /(admin)
         /create-chatbot
            - page.tsx
         - layout.tsx
         - page.tsx

      /(guest)
         /test-create
            - page.tsx
         - layout.tsx
         - page.tsx
         
      /context
         - TranslationContext.tsx

      /fonts
         - Agrem.woff
      
      /hooks
         - useTranslation.tsx
         - useAuth.tsx
      
      /translations
         /en
            - language.json
         /nl
            - language.json

      /styles
         - globals.css
         - theme.css

      - clerk.d.tsx
      - layout.tsx

   /components
      /admin
         - Header.tsx
         - Sidebar.tsx
      /guest
         - Header.tsx
         - Sidebar.tsx
      /shared
         - Avatar.tsx
         - LanguageSwitcher.tsx
      /ui 
         - button.tsx
         - input.tsx
      - ApolloProvider.tsx

   /graphql
      - apolloClient.ts

   /lib
      - utils.ts

   /public
      - favicon.svg
      /images
         - Logo.svg

   /scripts
      - seed.sql 
   
   - .env.local
   - .eslintrc.json
   - .gitignore
   - components.json
   - middleware.ts
   - next-end.d.tsx
   - next.config.ts
   - package-lock.json
   - package.json
   - postcss.config.mjs
   - project-structure.md
   - README.md
   - tailwind.config.ts
   - tsconfig.json
