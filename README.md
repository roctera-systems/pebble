# 🪨 pebble

## DISCLAIMER
do not run `firebase deploy` as of yet since app isnt ready for production. If you do then the site will remain up but lets keep storage costs low so only use `firebase serve` for testing.

I already ran `firebase hosting:disable` so to renable (note for myself) just run `firebase deploy`

**Simple, collaborative todo management for Roctera Systems teams**

Pebble is an internal web application designed for real-time task collaboration across Roctera Systems. Built for simplicity and speed, it enables teams to create, share, and track tasks together without the overhead of complex project management tools.

## ✨ Features

- **Real-time collaboration** - See changes instantly across all team members
- **Simple task management** - Add, complete, and delete tasks with ease
- **User attribution** - Track who created and completed each task
- **Responsive design** - Works seamlessly on desktop
- **Zero setup** - Just enter your name and start collaborating

## 🚀 Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Firebase Firestore (NoSQL database)
- **Hosting**: Firebase Hosting
- **Real-time**: Firestore real-time listeners

## 📱 Usage

1. **Join a session** - Enter your name to start collaborating
2. **Add tasks** - Type in the input field and hit Enter or click Add
3. **Complete tasks** - Check the checkbox to mark tasks as done
4. **Delete tasks** - Click the × button to remove tasks
5. **See live updates** - Watch as teammates add and complete tasks in real-time

## 📊 Firebase Costs

Designed to stay within Firebase's generous free tier:
- **Firestore**: 50k reads, 20k writes per day
- **Hosting**: 10GB storage, 10GB transfer per month
- **Functions**: 125k invocations per month

## How to Run:

NPM Packages:
```bash
npm install firebase
```

```bash
npm install firebase-tools -g
```

## 📝 License

Internal use only - Roctera Systems

## 🎯 Roadmap

- [ ] Move stack into react
- [ ] User authentication with email/password
- [ ] Project/workspace separation
- [ ] Task due dates and priorities
- [ ] File attachments
- [ ] Google Drive Integration
- [ ] Email notifications
- [ ] Offline support
- [ ] Custom user configuration
- [ ] Dark mode
- [ ] Export functionality

Built with ❤️ by the Roctera Systems team
