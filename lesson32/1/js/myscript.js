const playList = [
{
  author: 'LED ZEPPELIN',
  song: 'STAIRWAY TO HEAVEN'
},
{
  author: 'QUEEN',
  song: 'BOHEMIAN RHAPSODY'
},
{
  author: "LYNYRD SKYNYRD",
  song:"FREE BIRD"
},
{
  author: "JIMI HENDRIX",
  song:"ALL ALONG THE WATCHTOWER"
},
{
  author: "AC/DC",
  song:"BACK IN BLACK"
},
{
  author: "QUEEN",
  song:"WE WILL ROCK YOU"
},
{
  author: "METALLICA",
  song:"ENTER SANDMAN"
}
];
//document.write('<div style="text-align:center"> <p>  List of songs </p></div}');
document.write('<ol>');
playList.forEach(oneSong => document.write(`<li><b>${oneSong.author}</b>: ${oneSong.song} </li>`));
document.write('</ol>');
