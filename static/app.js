class Chatbox
{
    constructor(){
        this.args = {
            openButton : document.querySelector('.chatbox__button'),
            chatBox : document.querySelector('.chatbox__support'),
            sendButton : document.querySelector('.send__button')
        }
        this.state = false;
        this.message = [];
    }
    
    display()
    {
        const {openButton, chatBox, sendButton} = this.args;
        openButton.addEventListener('click', ()=>this.toggleState(chatBox))
        sendButton.addEventListener('click', ()=>this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter"){
                this.onSendButton(chatBox)
            }
        })
        
    }

    toggleState(chatBox){
        this.state = !this.state;

        if(this.state){
            chatBox.classList.add('chatbox--active')
        } else{
            chatBox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatBox){
        var textField = chatBox.querySelector('input');
        let text1 = textField.value
        if(text1 ===""){
            return;
        }
        let msg1 = {name: "User", message: text1}
        this,this.messages.push(mgs1);

        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({message: text1}),
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },  
        })

        .then(r => r.json())
        .then(r =>{
            let msg2 = {name: "Sam", message: r.anser};
            this.message.push(msg2);
            this.updateChatText(chatBox)
            textField.value=''

        }).catch((error) => {
            console.error('Error:', console.error());
            this.updateChatText(chatBox)
            textField.value=''
        });

    }

    updateChatText(chatBox){
        var html ='';
        this.messages.slice().reserve().forEach(function(item, ){
            if(item.name ==="Sam"){
                html +='<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }else{
                html +='<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
    
}

const chatbox = new Chatbox();
chatbox.display();