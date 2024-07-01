import React from 'react';
import jsPDF from 'jspdf';
import logoImg from './logo.png'; // Importe a imagem que deseja incluir no PDF

const PdfGenerator = () => {
  const generatePdf = () => {
    // Cria um novo documento jspdf
    const pdf = new jsPDF();

    // Adicionando a imagem ao documento PDF
    // Carregar a imagem como recurso externo
    const imgData = logoImg;

    // Adiciona a imagem na posição e tamanho desejados
    // Ajuste as coordenadas (10, 10) e as dimensões (180, 180) conforme necessário
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 180);

    // Gera o arquivo PDF com nome 'exemplo_com_imagem.pdf'
    pdf.save('exemplo_com_imagem.pdf');
  };

  return (
    <div>
      <h2>Gerador de PDF com jsPDF e React</h2>
      <p>Clique no botão abaixo para gerar um PDF com uma imagem.</p>
      <button onClick={generatePdf}>Gerar PDF com Imagem</button>
    </div>
  );
};

export default PdfGenerator;
