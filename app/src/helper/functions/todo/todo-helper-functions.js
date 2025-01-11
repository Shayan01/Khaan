// export const deleteDoneTodos = () => {
    alert('123')
    const paragraphs = document.querySelectorAll('p'); 
    paragraphs.forEach(function(paragraph) { 
      if (paragraph.textContent.includes('انجام شده')) { 
        paragraph.remove(); 
      }
    });
//   };