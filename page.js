let eat_value=false;
let drink_value=false;
let eat=document.getElementById("eat");
let drink=document.getElementById("drink");
function myfunction(get)
{
    if(get.id=="eat")
   {
    document.getElementById(get.id).style.backgroundColor="#616161";
    document.getElementById(get.id).style.color="white";
    document.getElementById("drink").style.backgroundColor="transparent";
    document.getElementById("drink").style.color="black";

    document.getElementsByClassName("hone")[0].innerHTML="Bread Basket";
    document.getElementsByClassName("pone")[0].innerHTML="Assortment of fresh baked fruit breads and muffins 5.50";
    document.getElementsByClassName("htwo")[0].innerHTML="Honey Almond Granola with Fruits";
    document.getElementsByClassName("ptwo")[0].innerHTML="Natural cereal of honey toasted oats, raisins, almonds and dates 7.00";
    document.getElementsByClassName("hthree")[0].innerHTML="Belgian Waffle";
    document.getElementsByClassName("pthree")[0].innerHTML="Vanilla flavored batter with malted flour 7.50";
    document.getElementsByClassName("hfour")[0].innerHTML="Scrambled eggs";
    document.getElementsByClassName("pfour")[0].innerHTML="Scrambled eggs, roasted red pepper and garlic, with green onions 7.50";
    document.getElementsByClassName("hfive")[0].innerHTML="Blueberry Pancakes";
    document.getElementsByClassName("pfive")[0].innerHTML="With syrup, butter and lots of berries 8.50";


   }
   if(get.id=="drink")
   {
    document.getElementById(get.id).style.backgroundColor="#616161";
    document.getElementById(get.id).style.color="white";
    document.getElementById("eat").style.backgroundColor="transparent";
    document.getElementById("eat").style.color="black";
    

    document.getElementsByClassName("hone")[0].innerHTML="Coffee";
    document.getElementsByClassName("pone")[0].innerHTML="Regular coffee 2.50";
    document.getElementsByClassName("htwo")[0].innerHTML="Chocolato";
    document.getElementsByClassName("ptwo")[0].innerHTML="Chocolate espresso with milk 4.50";
    document.getElementsByClassName("hthree")[0].innerHTML="Corretto";
    document.getElementsByClassName("pthree")[0].innerHTML="Whiskey and coffee 5.00";
    document.getElementsByClassName("hfour")[0].innerHTML="Iced tea";
    document.getElementsByClassName("pfour")[0].innerHTML="Hot tea, except not hot 3.00"
    document.getElementsByClassName("hfive")[0].innerHTML="Soda";
    document.getElementsByClassName("pfive")[0].innerHTML="Coke, Sprite, Fanta, etc. 2.50 ";
   }

}
