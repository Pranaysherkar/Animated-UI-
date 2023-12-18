//custome cursor.
let cursor = document.querySelector(`#cursor`);

window.addEventListener("mousemove", function (det) {

    cursor.style.transform = `translate(${det.clientX}px,${det.clientY}px)`;
});

// a tag link activation.
const navLink = document.querySelectorAll(`.nav a`);

navLink.forEach(nav => {
    nav.addEventListener("click", () => {
        document.querySelector(`.active`)?.classList.remove('active');
        nav.classList.add('active');
    });
});
//on scroll navbar color change and home page animation

gsap.to(".header", {
    backgroundColor: "rgba(203, 203, 206, 0.347)",
    backdropFilter: " blur(15px)",
    height: "65px",
    duration: .2,
    scrollTrigger: {
        trigger: ".header",
        scroller: "body",
        start: "top -10%",
        end: "top -31%",
        scrub: 0,
    },
});

gsap.from(".container .con-left", {
    x: 60,
    duration: .5,
    scrollTrigger: {
        trigger: ".container .con-left",
        scroller: "body",
        scrub: 1,
    }
})
gsap.from(".container .con-right", {
    x: -40,
    duration: .5,
    scrollTrigger: {
        trigger: ".container .con-right",
        scroller: "body",
        scrub: 1,
    }
})

//nav icon magnetic effect
Shery.makeMagnet(".icon", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

//page one onclick event. 

Shery.imageEffect(".back", {
    style: 6, config: {
        "noiseDetail": { "value": 0, "range": [0, 100] },
        "distortionAmount": { "value": 0, "range": [0, 10] },
        "scale": { "value": 36.36, "range": [0, 100] },
        "speed": { "value": 0.79, "range": [0, 1] },
        "aspect": { "value": 1.8580645161290323 },
        "gooey": { "value": true },
        "infiniteGooey": { "value": true },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 1, "range": [0.1, 5] },
        "displaceAmount": { "value": 0.5 },
        "masker": { "value": false },
        "maskVal": {
            "value": 1,
            "range": [1, 5]
        },
        "scrollType": { "value": 0 },
        "geoVertex": { "range": [1, 64], "value": 1 },
        "noEffectGooey": { "value": true },
        "onMouse": { "value": 1 },
        "noise_speed": { "value": 1, "range": [0, 10] },
        "metaball": { "value": 0.2, "range": [0, 2] },
        "discard_threshold": { "value": 0.5, "range": [0, 1] },
        "antialias_threshold": { "value": 0, "range": [0, 0.1] },
        "noise_height": { "value": 0.5, "range": [0, 2] },
        "noise_scale": { "value": 9, "range": [0, 100] }
    }, gooey: true,
});

//Product
const Product = [
    {
        id: 0,
        image: 'images/products/f1.jpg',
        title: 'Fancy shirt',
        price: '₹ 1,000/-',
        label: 'code: #001'
    },
    {
        id: 1,
        image: 'images/products/f2.jpg',
        title: 'Fancy shirt',
        price: '₹ 900/-',
        label: 'code: #002'
    },
    {
        id: 2,
        image: 'images/products/f3.jpg',
        title: 'Fancy shirt',
        price: '₹ 1,100/-',
        label: 'code: #003'
    },
    {
        id: 3,
        image: 'images/products/f4.jpg',
        title: 'Treandy shirt',
        price: '₹ 1,200/-',
        label: 'code: #004'
    },
    {
        id: 4,
        image: 'images/products/f5.jpg',
        title: 'Fancy shirt',
        price: '₹ 800/-',
        label: 'code: #005'
    },
    {
        id: 5,
        image: 'images/products/f6.jpg',
        title: 'Denim',
        price: '₹ 1,500/-',
        label: 'code: #006'
    },
    {
        id: 6,
        image: 'images/products/f7.jpg',
        title: 'Plazo',
        price: '₹ 750/-',
        label: 'code: #007'
    },
    {
        id: 7,
        image: 'images/products/f8.jpg',
        title: 'Fancy Skirts',
        price: '₹ 999/-',
        label: 'code: #008'
    },
    {
        id: 8,
        image: 'images/products/n1.jpg',
        title: 'Lightblue shirt',
        price: '₹ 1,250/-',
        label: 'code: #009'
    },
    {
        id: 9,
        image: 'images/products/n2.jpg',
        title: 'Grey shirt',
        price: '₹ 1,000/-',
        label: 'code: #0010'
    },
    {
        id: 10,
        image: 'images/products/n3.jpg',
        title: 'White shir',
        price: '₹ 1,000/-',
        label: 'code: #0011'
    },
    {
        id: 11,
        image: 'images/products/n4.jpg',
        title: 'Printed shirt',
        price: '₹ 1,500/-',
        label: 'code: #0012'
    },
]
const cateegories = [...new Set(Product.map((item) => { return item }))]
// let i = 0;
document.getElementById('root').innerHTML = cateegories.map((item) => {
    var { image, title, price, label } = item;
    return (`<div class="box">
                <div class="img-box">
                    <img src="${image}" alt="" class="images">
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <h3>${label}</h3>
                 </div>
           </div>`
    )

}).join('');

gsap.from("#root .box", {
    opacity: .8,
    x: 5,
    scale: .5,
    duration: 1,
    scrollTrigger: {
        trigger: ".con-right",
        scroller: "body",
        // markers:true,
        scrub: 1,
    }
});

//page 3 dom manuplation
const Product3 = [
    {
        id: 0,
        image: 'images/products/fb1.jpg',
        title: 'Fancy Jacket',
        price: '₹ 1,000/-',
        label: 'code: #00111'
    },
    {
        id: 1,
        image: 'images/products/fb2.jpg',
        title: 'Grey t-shirt',
        price: '₹ 900/-',
        label: 'code: #00112'
    },
    {
        id: 2,
        image: 'images/products/fb3.png',
        title: 'Girls Top',
        price: '₹ 1,100/-',
        label: 'code: #00113'
    },
    {
        id: 3,
        image: 'images/products/fb4.png',
        title: 'Jeans',
        price: '₹ 1,200/-',
        label: 'code: #00114'
    },
    {
        id: 4,
        image: 'images/products/fb5.png',
        title: 'Black shirt',
        price: '₹ 800/-',
        label: 'code: #00115'
    },
    {
        id: 5,
        image: 'images/products/fb6.jpg',
        title: 'Red hoodie',
        price: '₹ 1,500/-',
        label: 'code: #00116'
    },
    {
        id: 6,
        image: 'images/products/fb7.jpg',
        title: 'Blue shirt',
        price: '₹ 750/-',
        label: 'code: #00117'
    },
    {
        id: 7,
        image: 'images/products/fb8.png',
        title: 'Grey jacket',
        price: '₹ 999/-',
        label: 'code: #00118'
    },
    {
        id: 8,
        image: 'images/products/fb9.png',
        title: 'Girls tshirt',
        price: '₹ 1,250/-',
        label: 'code: #00119'
    },
    {
        id: 9,
        image: 'images/products/fb10.png',
        title: 'Grey shirt',
        price: '₹ 1,000/-',
        label: 'code: #00120'
    },
    {
        id: 10,
        image: 'images/products/fb11.png',
        title: 'Black Top',
        price: '₹ 1,000/-',
        label: 'code: #00121'
    },
    {
        id: 11,
        image: 'images/products/fb12.png',
        title: 'Designed Top',
        price: '₹ 1,500/-',
        label: 'code: #00122'
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'White top',
        price: '₹ 1,590/-',
        label: 'code: #00123'
    },
    {
        id: 13,
        image: 'https://images.unsplash.com/flagged/photo-1571367034809-ba7669187028?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Cheque Shirt',
        price: '₹ 1,200/-',
        label: 'code: #00124'
    },
    {
        id: 14,
        image: 'https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
        title: 'White t-shirt',
        price: '₹ 800/-',
        label: 'code: #00125'
    },
    {
        id: 15,
        image: 'https://images.unsplash.com/photo-1622445270936-5dcb604970e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        title: 'Fancy top',
        price: '₹ 999/-',
        label: 'code: #00126'
    },
    {
        id: 16,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8fDA%3D',
        title: 'Printed shirt',
        price: '₹ 1,299/-',
        label: 'code: #00127'
    },
    {
        id: 17,
        image: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Black T-shirt',
        price: '₹ 300/-',
        label: 'code: #00128'
    },
    {
        id: 18,
        image: 'https://images.unsplash.com/photo-1613852348851-df1739db8201?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Retero shirt',
        price: '₹ 800/-',
        label: 'code: #00129'
    },
    {
        id: 19,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
        title: 'Black t-shirt',
        price: '₹ 350/-',
        label: 'code: #00130'
    },
    {
        id: 20,
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/r/3/s/xl-614354-v-mart-original-imagswzh2haqhjgz.jpeg?q=70',
        title: 'Track Paint',
        price: '₹ 690/-',
        label: 'code: #00131'
    },
    {
        id: 21,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Jacket',
        price: '₹ 1,000/-',
        label: 'code: #00132'
    },
    {
        id: 22,
        image: 'https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xBQ3BTVmxhMDdCb3x8ZW58MHx8fHx8',
        title: 'Outfit',
        price: '₹ 1,700/-',
        label: 'code: #00133'
    },
    {
        id: 23,
        image: 'https://nobero.com/cdn/shop/files/powder-blue_d4707a31-d154-42fb-83f9-204152439874.jpg?v=1699444502&width=360',
        title: 'Hoodie',
        price: '₹ 999/-',
        label: 'code: #00134'
    },
]
const cateegories3 = [...new Set(Product3.map((items) => { return items }))]
// let i = 0;
document.getElementById('root3').innerHTML = cateegories3.map((items) => {
    var { image, title, price, label } = items;
    return (`<div class="box3">
<div class="img-box3">
    <img src="${image}" alt="" class="images">
</div>
<div class="bottom">
    <p>${title}</p>
    <h2>${price}</h2>
    <h3>${label}</h3>
 </div>
           </div>`
    )

}).join('');

gsap.from(".box3", {
    duration: .5,
    x: -100,
    scrollTrigger: {
        trigger: ".box3",
        scroller: "body",
        scrub: 1

    }
})
//blog heding hovering effect

document.querySelector(`.heading`).addEventListener("mousemove", (a) => {
    var gif = document.querySelector(`.heading .gif`);
    gif.style.top = (a.y - 150) + "px";
    gif.style.left = (a.x - 110) + "px";
    gif.style.opacity = 1;
    document.querySelector(`#cursor`).style.opacity = 0;

})
document.querySelector(`.heading`).addEventListener("mouseleave", () => {
    var gif = document.querySelector(`.heading .gif`);
    gif.style.opacity = 0;
    document.querySelector(`#cursor`).style.opacity = 1;
})
//about
gsap.from("#page4 .heading,#page4>h1", {
    opacity: .9,
    scale: .9,
    scrollTrigger: {
        trigger: "#page4 .heading",
        scroller: "body",
        scrub: 1,

    }
})

gsap.from(".b1", {
    x: 50,
    duration: .8,
    scrollTrigger: {
        trigger: ".b1",
        scroller: "body",
        scrub: 1
    }
})
gsap.from(".b2", {
    x: -80,
    duration: .8,
    scrollTrigger: {
        trigger: ".b2",
        scroller: "body",
        scrub: 1
    }
})
//blog explore button video
document.querySelector(`.b3 >button`).addEventListener("mouseover", () => {
    document.querySelector(`.b3 >video`).style.opacity = 1;
    document.querySelector(`.b3 >video`).play();
})
document.querySelector(`.b3 >button`).addEventListener("mouseout", () => {

    document.querySelector(`.b3 >video`).style.opacity = 0;
    document.querySelector(`.b3 >video`).pause();

})
//feature button animation
gsap.from(".b3>button", {
    opacity: 1,
    scale: .8,
    duration: .8,
    scrollTrigger: {
        trigger: ".b3>button",
        scroller: "body",
        scrub: 2,
    }
})

//b1
Shery.textAnimate("#b1-h2", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect(".b1 img", {
    style: 6,
    config: { "noiseDetail": { "value": 8.4, "range": [0, 100] }, "distortionAmount": { "value": 4.2, "range": [0, 10] }, "scale": { "value": 26, "range": [0, 100] }, "speed": { "value": 0.38, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.737445525164068 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0.16, "range": [0, 0.5] }, "shapeRadius": { "value": 0.11, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.06, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
});

//b2

Shery.makeMagnet(".b2 .lgif" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet("span" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

//custom scroller
gsap.to(".f-elem", {
    scrollTriger: {
        trigger: ".f-main",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".end",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})
let section = document.querySelectorAll(".f-elem");
Shery.imageEffect(".f-images", {
    style: 5,
    slideStyle: (setScroll) => {
        section.forEach(function(section,index) {
            ScrollTriger.create({
                trigger: section,
                start:"top top", 
                scrub:1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                }
            })
        });
    },
});

//console message send
function send(){
   alert("Thanks to connect with us. 😊") 
}