import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

export function getEvents(req, res) {
  res.json({ events: "Events" });
}

export function getEvent(req, res) {
  res.json({ events: "Event" });
}

export function updateEvent(req, res) {
  res.json({ events: "Update Event" });
}

export function addEvent(req, res) {
  res.json({ events: "Add Event" });
}

export function deleteEvent(req, res) {
  res.json({ events: "Delete Event" });
}