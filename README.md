# pebble

## File Structure:
```bash
app/
├── layout.tsx                    # Root layout
├── page.tsx                     # Landing page
├── login/
│   └── page.tsx                 # Authentication
├── dashboard/
│   ├── layout.tsx               # Dashboard layout with sidebar
│   ├── (overview)/
│   │   ├── page.tsx            # Main dashboard view
│   │   └── loading.tsx         # Loading skeleton
│   ├── tasks/
│   │   ├── page.tsx            # All tasks view (like invoices)
│   │   ├── create/
│   │   │   └── page.tsx        # New task form
│   │   └── [id]/
│   │       └── edit/
│   │           └── page.tsx    # Edit task
│   ├── projects/
│   │   ├── page.tsx            # Projects overview
│   │   └── [id]/
│   │       └── page.tsx        # Project detail with tasks
│   └── team/
│       └── page.tsx            # Team members management
├── lib/
│   ├── data.ts                 # Supabase queries
│   ├── actions.ts              # Server actions for CRUD
│   ├── definitions.ts          # TypeScript types
│   └── supabase.ts            # Supabase client config
└── ui/
    ├── dashboard/
    │   ├── sidenav.tsx         # Updated nav for tasks
    │   ├── task-cards.tsx      # Task summary cards
    │   ├── recent-tasks.tsx    # Recent activity
    │   └── task-chart.tsx      # Task completion analytics
    ├── tasks/
    │   ├── table.tsx           # Tasks table (like invoices table)
    │   ├── create-form.tsx     # New task form
    │   ├── edit-form.tsx       # Edit task form
    │   ├── status-badge.tsx    # Status indicator
    │   └── priority-badge.tsx  # Priority indicator
    └── shared/
        ├── search.tsx          # Search functionality
        ├── pagination.tsx      # Pagination component
        └── date-picker.tsx     # Date selection
```

- `/app`: Contains all the routes, components, and logic for the application.
- `/app/lib`: Contains functions used in the application, such as reusable utility functions and data fetching functions.
- `/app/ui`: Contains all the UI components for the application, such as cards, tables, and forms.
- `/public`: Contains all the static assets for the application, such as images.

- Config Files: The config files such as next.config.ts at the root of the application. Most of these files are created and pre-configured when no need to modify them for now.

## Getting Started
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.