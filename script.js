//gsap stuff here

gsap.from('.anim',{
    scrollTrigger: {
        trigger: '#hof',
        start:'top 15%',
    },
    stagger:.2,
    y: 20,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})

gsap.to('.row3',{
    ScrollTrigger:{
         trigger :'.row3',
         start :'top 2%',
    }
})


gsap.utils.toArray('.row3').forEach(everyRow => {
    ScrollTrigger.create({
        trigger: everyRow,
        start:'top 70px',
        end:"bottom 10%",
        pin:true
    })
})

