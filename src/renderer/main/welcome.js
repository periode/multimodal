'use strict'

const ipc = require('electron').ipcRenderer

let current = {
	"course":"",
	"title":""
}

let setLesson = (_e, _c, _l) => {
	current.course = _c
	current.title = _l


	let all_lessons = document.getElementsByClassName('welcome-lesson')
	for(let less of all_lessons)
		less.setAttribute('class', 'welcome-lesson')


	_e.setAttribute('class', 'welcome-lesson selected')

	let btns = document.getElementsByClassName('inter-btn-main')
	for(let btn of btns)
		btn.disabled = false
}

let openLesson = (_c, _l) => {
	let course = _c ? _c : current.course
	let title = _l ? _l : current.title
	ipc.send('open-lesson', {"course": current.course, "title": current.title})
}

let createLesson = () => {
	ipc.send('create-lesson')
}

let editLesson = () => {
	ipc.send('edit-lesson', {"course": current.course, "title": current.title})
}

let exportLesson = () => {
	ipc.send('export-lesson', {"course": current.course, "title": current.title})
	let msg = 'exported '+current.title
	setMessage(msg)
}

let setMessage = (_msg) => {
	let el = document.getElementById('msg-log')
	el.innerText = _msg
	el.style.opacity = 1
	setTimeout(() => { el.style.opacity = 0 }, 2000)
}

export { openLesson, createLesson, editLesson, setLesson, exportLesson }
