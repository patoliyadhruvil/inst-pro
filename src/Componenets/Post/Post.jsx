import Postimg from "../Post-img/Postimg";
import Main from "../Main/Main";
import Form from "../Form/Form";
import Icon from "../Icon/Icon";
import Icon2 from "../Icon-2/Icon-2";
import Icon3 from "../Icon -3/Icon-3";

const Post = () =>{

    return(

        <>
           <div className="container">
                <div className="row">
                    <div className="box shadow p-3 mb-5 bg-body rounded">
                        <div className="count d-flex">
                            <div className="in-img">
                                <Postimg/>
                            </div>
                            <p className="mt-1">Natural.com</p>
                        </div>
                        <div className="mein-img mb-3">
                            <Main/>
                        </div>
                        <div className="icons d-flex mb-3">
                            <Icon/>
                            <Icon2/>
                            <Icon3/>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, laborum!.</p>
                        <Form/>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Post;