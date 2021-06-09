class Form{
constructor(){
this.heading =createElement('h1','car racing game')
this.heading.position(250,50)
this.input=createInput('name')
this.input.position(250,200)
this.button=createButton('play')
this.button.position(300,300)
this.button1=createButton('reset')
this.button1 .position(width-100,50)
this.button2=createButton('restart')
this.button2.position(width-100,100)
}
display(){
    this.button.mousePressed(()=>{
        this.heading.hide()
        this.input.hide()
        this.button.hide()
        this.greeting1=createElement('h5','wait for the other players to join')
        this.greeting1.position(250,250)
        playerCount=playerCount+1
        player.index=playerCount
        player.updateCount(playerCount)
        player.name=this.input.value()
        player.update()
        this.greeting2=createElement('h5')
        this.greeting2.html('hello '+ player.name)
        this.greeting2.position(250,200)
    })
       this.button1.mousePressed(()=>{
           database.ref('/').update({
               playerCount:0,
               players:null,
               gameState:0,
               RANK:0,

           })
           


       })
       this.button2.mousePressed(()=>{
           window.location.reload()
       })
}
}