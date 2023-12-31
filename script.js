const diceView = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];
       const btn = document.createElement('button');
       btn.textContent = `Row Dice`;
      
      const playArea = document.createElement('div');
      document.body.prepend(playArea);
      playArea.append(btn);
      
      const area1 = document.createElement('div');
      
      const area2 = document.createElement('div');
      
      const container = document.createElement('div');
      
      playArea.append(container);
      container.append(area1);
      container.append(area2);
      area1.textContent = `First Dice`;
      area2.textContent = `Second Dice`;
      addBorders(area1);
      addBorders(area2);
      
      btn.addEventListener('click', ()=>{ 
        rollValue();
        console.log(area1.val);
        console.log(area2.val);
      })
      
      function genDice(val){
        let html = `<div>`;
        let tempArr = diceView[val];
        console.log(tempArr);
        
        for (let x = 1; x < 10; x++){
          let tempVall = `white`;
          if (tempArr.includes(x)){
            tempVall = `black`;
          }
          
          html += `<span style="width: 90px; display: inline-block; height: 90px; border-radius: 20px; background-color: ${tempVall}; margin: 2px;"></span>`;
        }
        
        html += `</div>`;
        return html;
      }
      
      function rollValue(){
        area1.val = Math.floor(Math.random() * 6);
        area2.val = Math.floor(Math.random() * 6);
        
        area1.innerHTML = genDice(area1.val);
        area2.innerHTML = genDice(area2.val);
      }
      
      function addBorders(el) {
        el.style.border = '1px solid #ddd';
        el.style.borderRadius = "10px";
        el.style.padding = '10px';
        el.style.fontSize = '1.5em';
        el.style.width = '290px';
        el.style.height = '290px';
        el.style.margin = '10px';
        el.style.backgroundColor = 'white';
        //el.style.width = '40%';
        el.style.float = 'left';
        //el.style.height = el.offsetWidth+'px';
       }
