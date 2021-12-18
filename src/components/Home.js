
import axios  from 'axios';
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            hasMore: true,
            count: 30,
            start: 1,
        }
    }

     componentDidMount(){
        const {count, start} = this.state;

         axios.get(`https://picsum.photos/v2/list?page=${start}&limit=${count}`)
         .then(res => JSON.stringify(this.setState({ images: res.data}) ))
     }


     fetchImages= () =>{
        const {count, start} = this.state;

        this.setState( {start: this.state.start +1});
        this.setState( {count: 30});

         axios.get(`https://picsum.photos/v2/list?page=${start}&limit=${count}`)
         .then(res => JSON.stringify(this.setState({ images: this.state.images.concat(res.data)}) ))

     }


        render() {

        return (

        <div className="images">
        <InfiniteScroll
        dataLength= {this.state.images.length}
        next = { this.fetchImages}
        hasMore= {true}
        loader={<h4> Loading... </h4>}
        >
 
        {   
            this.state.images.map(image =>(
            <img className='single-photo-gray' src={image.download_url +'?grayscale'} alt='' />
        ))}

        </InfiniteScroll>
        </div>
               
    )
         }

   

      
}



export default Home

