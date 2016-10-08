var Comet = React.createClass({  
  getInitialState() {
    return {
      x: 0,
      y: 5.25,
      z: -5
    };
  },
  render: function() {
    console.log("render called");
    return (<a-sphere id="comet" position={{x: this.state.x, y: this.state.y, z: this.state.z}} radius="1.25" color="#EF2D5E"></a-sphere>);
  }
});

console.log("got here", Comet);
ReactDOM.render(<Comet name='commie' />, document.getElementById('container'));

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('container')
// );


// var x = 0, y = 5.25, z = -5;
// var myComet = document.getElementById('comet');
// myComet.setAttribute('position', {x: x, y: y, z: z});
// console.log(myComet);

// function changeZofComet() {
//     console.log("got here")
//     var myComet = document.getElementById('comet');
//     var myPos = myComet.getAttribute('position');
//     console.log(myPos.y)
//     myPos.y = myPos.y - 0.01;
//     myComet.setAttribute('position', myPos);
//     if (myPos.y > 0) {
//         setTimeout(100, changeZofComet());
//     } else {
//         console.log("schmuguwuga")
//     }
// }

// setTimeout(100, changeZofComet());