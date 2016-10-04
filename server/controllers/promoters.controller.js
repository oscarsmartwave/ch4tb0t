import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

export function getPromoters(req, res) {
  res.json({ promoters: "Promoters" });
}

export function getPromoter(req, res) {
  res.json({ promoters: "Promoter" });
}

export function updatePromoter(req, res) {
  res.json({ promoters: "Update Promoter" });
}

export function addPromoter(req, res) {
  res.json({ promoters: "Add Promoter" });
}

export function deletePromoter(req, res) {
  res.json({ promoters: "Delete Promoter" });
}