# Good Boy Foundation - Donation Platform

## 📋 Overview

Donation platform for dog shelters. Multi-step form with validation and data submission.

### Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **TanStack Query** (requests) + **React Context** (form state)
- **Mantine UI** + **Emotion** (styled-components)
- **React Hook Form** + **Zod** (validation)
- **next-intl** (i18n - SK)

### Structure

- **Atomic Design**: atoms → molecules → organisms
- **App Router**: Server Components by default
- **API**: TanStack Query with server prefetch
- **State**: React Context for global form state
- **Validation**: Zod schemas + React Hook Form
- **Styles**: Emotion styled + Mantine theme
- **i18n**: messages/sk.json, messages/en.json

### Features

- **Requests**: TanStack Query (caching, invalidation, prefetch)
- **Forms**: React Hook Form per step + global Context
- **Notifications**: react-toastify with custom components
- **Phone**: react-international-phone (SK/CZ with flags)
- **SEO**: meta tags on all pages, Open Graph
- **Responsive**: mobile-first approach, breakpoints in styled

### Flow

```
/ → Shelter selection → Personal info → Confirmation → POST /contribute → /about
```

---

<details>
<summary>📚 Detailed documentation</summary>

## 🎯 Project Overview

Modern, fully responsive donation platform for the Good Boy Foundation supporting dog shelters in Slovakia. Built with Next.js 16, TypeScript, and featuring complete internationalization support.

### ✨ Key Features

- **Multi-step donation form** with real-time validation
- **Shelter selection** - contribute to specific shelter or entire foundation
- **Custom donation amounts** with preset options
- **International phone input** with country flags (SK/CZ)
- **Real-time statistics** - total contributions and donor count
- **Full i18n support** (Slovak/English)
- **Responsive design** - mobile, tablet, desktop
- **SEO optimized** with meta tags and Open Graph
- **Server-side rendering** for optimal performance

---

## 🏗️ Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── (main)/              # Main donation flow
│   ├── about/               # About page with statistics
│   ├── contacts/            # Contact information
│   └── layout.tsx           # Root layout with providers
├── components/
│   ├── atoms/               # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Title.tsx
│   │   ├── Text.tsx
│   │   ├── BackButton.tsx
│   │   └── ...
│   ├── molecules/           # Composite components
│   │   ├── Stepper.tsx
│   │   ├── StepNavigation.tsx
│   │   ├── FormInput.tsx
│   │   └── PhoneInput.tsx
│   └── organisms/           # Complex feature components
│       ├── ShelterStepper.tsx    # Main form orchestrator
│       ├── ShelterSelection.tsx
│       ├── PersonalInfo.tsx
│       └── Confirmation.tsx
├── contexts/
│   └── FormContext.tsx      # Global form state management
├── hooks/                   # Custom React hooks
│   ├── useShelters.ts
│   ├── useContribute.ts
│   └── useAboutResults.ts
├── services/
│   └── api/                 # API client and endpoints
├── validators/              # Zod schemas
├── i18n/                    # Internationalization config
├── styles/                  # Theme and global styles
└── types/                   # TypeScript definitions
```

---

## 🛠️ Technology Stack

### Core Technologies

- **Next.js 16.0** - React framework with App Router
- **TypeScript** - Type-safe development
- **Emotion** - CSS-in-JS styling solution

### State Management

- **TanStack Query v5** - Server state management
- **React Context** - Client state (form data)
- **React Hook Form** - Form state and validation
- **Zod** - Schema validation

### UI & Styling

- **Mantine v8.3** - Component library
- **Emotion/styled** - Styled components
- **React Icons** - Icon library
- **React Toastify** - Toast notifications

### Internationalization

- **next-intl v4.4** - i18n for App Router
- **Languages**: SK

### Form & Validation

- **react-hook-form** - Form management
- **@hookform/resolvers** - Zod integration
- **react-phone-number-input** - International phone input
- **Zod v4.1** - Schema validation

### Developer Tools

- **ESLint** - Code linting
- **Mantine ESLint config** - Mantine-specific rules

---

### Theme Structure

```typescript
theme/
├── colors.ts        # Color palette
├── typography.ts    # Font system
├── spacing.ts       # Spacing scale
└── breakpoints.ts   # Responsive breakpoints
```

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1200px
- Desktop: > 1200px

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

\`\`\`bash

# Install dependencies

npm install

# Run development server

npm run dev

# Build for production

npm run build

# Start production server

npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Key Features Implementation

### ✅ Form Validation

- Zod schemas for type-safe validation
- Real-time field validation
- Custom error messages in Slovak
- Accessible error display

### ✅ Internationalization

- next-intl with App Router
- Slovak (primary) + English
- Server + Client Components support
- ~80+ translation keys organized by namespace

### ✅ Responsive Design

- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized images (Next.js Image)

### ✅ Accessibility

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support

### ✅ Performance

- Server-side rendering
- React Server Components
- TanStack Query caching
- Prefetched data (shelters list)
- React 19 Compiler optimizations

### ✅ SEO

- Meta tags on all pages
- Open Graph tags
- Twitter cards
- Semantic heading structure
- Dynamic titles per page

---

## 🧪 Code Quality

### Type Safety

- Full TypeScript coverage
- Strict mode enabled
- Zod runtime validation
- Type-safe API client

### Code Organization

- Atomic Design Pattern
- Feature-based structure
- Shared utilities and hooks
- Consistent naming conventions

### Best Practices

- React Server Components where possible
- Client Components only when needed
- Proper error boundaries
- Loading states
- Optimistic updates

---

## 📱 Responsive Behavior

### Mobile (< 768px)

- Single column layout
- Stack navigation
- Full-width inputs
- Touch-optimized buttons

### Tablet (768px - 1200px)

- Two-column forms where appropriate
- Adaptive spacing
- Larger touch targets

### Desktop (> 1200px)

- Multi-column layouts
- Hover states
- Keyboard shortcuts
- Optimized for mouse interaction

---

## 🌐 API Integration

### Endpoints Used

- `GET /shelters` - List of participating shelters
- `POST /contribute` - Submit donation
- `GET /results` - Statistics (total + donors)

### API Documentation

https://frontend-assignment-api.goodrequest.dev/apidoc/

---

## 👨‍💻 Author

**Dmytro Lukianenko**

- Implementation of all requirements
- Additional features: i18n, full responsiveness, SEO
- Clean code with TypeScript
- Accessibility considerations

---

## 📄 License

This is a test assignment for GoodRequest.

---

<details>
<summary><strong>📋 Original Assignment (Click to expand)</strong></summary>

# Zadanie Frontend developer GoodRequest

Cieľom zadania je vytvoriť jednoduchú aplikáciu v Next.js, ktorá slúži ako formulár pre nadáciu GoodBoy na podporu slovenských útulkov pre psy.

**Aplikácia by mala umožňovať potenciálnym podporovateľom:**

- zvoliť si formu pomoci- všeobecný príspevok pre nadáciu alebo príspevok pre konkrétny útulok
- vybrať si konkrétny útulok zo zoznamu zapojených útulkov (nepovinné pole v prípade všeobecného príspevku, v opačnom prípade povinné pole)
- zvoliť si výšku príspevku, pričom je možné nastaviť aj vlastnú hodnotu (povinné pole)
- vyplniť svoje osobné údaje:
  - meno- nepovinné pole (2-20 znakov)
  - priezvisko- povinné pole (2-30 znakov)
  - e-mail - validný formát e-mailovej adresy
  - telefón - slovenské alebo české číslo s predvoľbou +420 / +421 so zobrazením zvolenej krajiny vo forme vlajky štátu
  - potvrdiť súhlas so spracovaním osobných údajov (povinné pole)
  - odoslať zvalidovaný formulár, prípadne zrozumiteľne oznámiť používateľovi chybový stav
- pozrieť si kontaktné údaje organizácie v rámci stránky Kontakt
- zistiť celkovú vyzbieranú sumu a počet/zoznam darcov (tieto údaje sa pravidelne aktualizujú a sú dostupné cez endpoint opísaný nižšie)

Pre účely zadania sme vytvorili 3 jednoduché API endpointy - GET zoznamu útulkov zapojených do projektu, GET pre hodnotu vyzbieranej sumy a počet darcov a POST na odoslanie obsahu formuláru. Dokumentáciu k nim nájdete na nasledovnom odkaze: https://frontend-assignment-api.goodrequest.dev/apidoc/

Grafické podklady pre zadanie nájdete na nasledovnom odkaze (registrácia do toolu Figma je zdarma): https://www.figma.com/design/fOYdJW8UqfZjT8o2WYigty/Frontend-Assignment-2.0

Vizuálna kvalita spracovania aplikácie a štýlovanie je tiež predmetom hodnotenia. Plynulé a user friendly UI s peknými prechodmi a animáciami sú plusový bod. Môžete použiť Mantine, Antd alebo akúkoľvek inú UI knižnicu- výber nechávame na vás.

**Kritériá na použité technológie:**

- Použiť Next.js
- Použiť TypeScript
- Na server state management použiť [TanStack Query](https://tanstack.com/query/latest)
- Na client state management (výber je na vás. Odporúčame context+reducer, zustand alebo iný)
- Knižnica pre správu formuláru (Odporúčame [react-hook-form](https://www.react-hook-form.com/), formik)
- Štruktúru projektu nechávame kompletne na vás, ale budeme ju hodnotiť. :)

* Nice to have (nepovinné kritériá):

  - Použiť lokalizačnú knižnicu na stringy (napr. i18next)
  - Použiť styled-components
  - Validácia formuláru pomocou [Zod](https://zod.dev/) schémy
  - Myslieť na accessibility (https://www.goodrequest.com/sk/blog/pristupnost-webu-pre-vyvojarov)

* Ak vám ostane čas alebo chuť :):

  - Responzívne zobrazenie
  - SEO (implementovať og:image a rôzne titles a descriptions na jednotlivých stepoch formuláru)
  - umožniť pridať viacerých darcov- je na vás ako to bude vyzerať

**Postup odovzdania zadania:**

- Naklonujte si tento repozitár k sebe
- Umiestnite ho do verejného github / bitbucket repozitáru a svoju prácu priebežne commitujte
- Do repozitáru udeľte prístup kontu [roman.haluska@goodrequest.com](mailto:roman.haluska@goodrequest.com) (v prípade súkromného repo na bitbucket) alebo pošlite link na verejné github repo na tento e-mail
- Ozvite sa [veronika.stefanatna@goodrequest.com](mailto:veronika.stefanatna@goodrequest.com) a [roman.haluska@goodrequest.com](mailto:roman.haluska@goodrequest.com) keď je zadanie za vás pripravené na review

Commit messages a spôsob commitovania budú tiež predmetom hodnotenia

**Ak by ste mali hocijaké otázky alebo ste sa niekde zasekli:**

- Kedykoľvek napíšte otázky alebo nás požiadajte o pomoc na [roman.haluska@goodrequest.com](mailto:roman.haluska@goodrequest.com) - radi vám poradíme ;)

</details>

The goal of the task is to create a simple application in Next.js that serves as a form for the GoodBoy Foundation to support Slovak shelters for dogs.

**The application should allow potential supporters to:**

- choose the form of help- a general donation for the foundation or a donation for a specific shelter
- select a specific shelter from a list of participating shelters (optional field for a general donation, mandatory field if donating to a specific shelter)
- choose the amount of the donation, with the possibility to set a custom value (mandatory field)
- fill in their personal details:
  - name – optional field (2-20 characters)
  - surname – mandatory field (2-30 characters)
  - e-mail – valid format of the e-mail address
  - phone – Slovak or Czech number with the country code +420 / +421, showing the selected country flag
  - confirm consent for personal data processing (mandatory field)
  - submit the validated form, or clearly notify the user of any errors
- view the contact details of the organization on the Contact page
- see the total amount raised and the number/list of donors (these data are regularly updated and accessible through the API endpoint described below)

For the purpose of this assignment, we have created 3 simple API endpoints: a GET for the list of shelters participating in the project, a GET for the total amount raised and the number of donors, and a POST for submitting the form content. You can find the documentation for these endpoints at the following link: https://frontend-assignment-api.goodrequest.dev/apidoc/

Design assets for the assignment can be found at the following link (registration to Figma tool is free): https://www.figma.com/design/fOYdJW8UqfZjT8o2WYigty/Frontend-Assignment-2.0

The visual quality of the application and styling is also part of the evaluation. A smooth and user-friendly UI with nice transitions and animations will earn extra points. You may use Mantine, Antd, or any other UI library – the choice is up to you.

**Criteria for technologies to use:**

- Use Next.js
- Use TypeScript
- Use [TanStack Query](https://tanstack.com/query/latest) for server state management
- Use a client state management solution (The choice is yours. We recommend context + reducer, zustand or other )
- Use a library for form management (We recommend [react-hook-form](https://www.react-hook-form.com/), formik)
- You are free to decide the project structure, but we will evaluate it. :)

* Nice to have (optional criteria):

  - Use a localization library for strings (e.g., i18next)
  - Use styled-components
  - Form validation using a [Zod](https://zod.dev/) schema
  - Consider accessibility (https://www.goodrequest.com/en/blog/web-accessibility-for-developers)

* If you have some spare time :):
  - Responsive design
  - SEO (implement og:image and various titles and descriptions on different form steps)
  - Allow adding multiple donors – it's up to you how this will look

**To submit an assignment:**

- Clone this repository to you
- Place it in a public GitHub / Bitbucket repository and commit your work regularly
- Grant access to the account [roman.haluska@goodrequest.com](mailto:roman.haluska@goodrequest.com) (for private repos on Bitbucket) or send the link to your public GitHub repo to this email
- Contact [veronika.stefanatna@goodrequest.com](mailto:veronika.stefanatna@goodrequest.com) and [roman.haluska@goodrequest.com](mailto:roman.haluska@goodrequest.com) when your assignment is ready for review

Commit messages and the way of commmiting will also be evaluated.

**If you have any questions or get stuck:**

- Feel free to ask questions or request help at [roman.haluska@goodrequest.com](mailto:roman.haluska@goodrequest.com) – we'll be happy to help you. ;)

</details>
