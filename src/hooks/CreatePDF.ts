import { jsPDF } from 'jspdf'

function downloadPDF(docDefinition: object) {
  const doc = new jsPDF()
  doc.text('待实现', 10, 10)
  doc.save()
}

export default downloadPDF
