
const btn = document.querySelector('#beta');
if(btn){
        btn.addEventListener('click',()=>{
                const mainTable = document.querySelector('.main-table');
                let row = document.createElement('tr');
                mainTable.appendChild(row);
                row.innerHTML=`<td><a><i class="fa-solid fa-trash"></i></a></td>
                               <td><img src="img/products/f2.jpg"></td>
                               <td>Carbon Astronaut T-shirt</td>
                               <td>Rs.599</td>
                               <td><input type="number" value="1" min="1"></td>
                               <td>Rs.599</td>`;
        })
}
