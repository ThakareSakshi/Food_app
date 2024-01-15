const Cards=(props)=>{
    return(
    <div class="cards">
       <div class="card-info">
         {props.data}
       </div>
       <div class="author">
        <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" class="author-img"/>

        <div class="author-name">
            <h4>Gladis Lennon</h4>
            <p>Head of SEO</p>
        </div>
       </div>
    </div>
    );

}
export default Cards;