/*点击链接改变*/
var nav_top=document.getElementById('nav_top');
var oUl=nav_top.getElementsByTagName('ul')[0];
var oLi=oUl.getElementsByTagName('li');
for(var i=0;i<oLi.length;i++){
	oLi[i].index=i;
	oLi[i].onclick=function(){
		for(var j=0;j<oLi.length;j++){
			oLi[j].classList.remove('active');
		}

		oLi[this.index].setAttribute('class', 'active');
}
}
/*点击超链接改变整体颜色*/
var oCt=document.getElementsByClassName('dd_content');
for(var i=0;i<oCt.length;i++){
	oCt[i].num=i;
	oCt[i].onmouseover=function(){
var ctli=oCt[this.num].getElementsByTagName('li');
var ctsp=oCt[this.num].getElementsByTagName('span');
var cta=oCt[this.num].getElementsByTagName('a');
for(var k=0;k<ctli.length;k++){
	cta[k].index=k;
	cta[k].onmouseover=function(){
		ctsp[this.index].style.color = '#293E86';
		ctli[this.index].style.color = '#293E86';
	}
	cta[k].onmouseout=function(){
		ctsp[this.index].style.color = '#BBB';
		ctli[this.index].style.color = '#555';
	}

}
}
}