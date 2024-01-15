import Button from "./Buttons"
const GetInTouch=()=>{
    return(
        <div class="GetInTouch">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
            </div>
            <div class="info">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.

Get in Touch</p>
            <Button bgColor="blue" color="white" title="Get in Touch" padding="10px 30px"></Button>
            </div>
        </div>
    )
}
export default GetInTouch;