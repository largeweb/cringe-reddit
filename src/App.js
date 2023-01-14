import logo from './logo.svg';
import { useState } from 'react';
import bg from './images/bg-cr.png'
import './App.css';

function App() {

  const [csi, scsi] = useState('');
  const [rvis,srvis] = useState(false);
  const [rn,srn] = useState(0); // rn = reddit number
  const [r1m,sr1m] = useState('R1');
  const [r2m,sr2m] = useState('R2');
  const [r3m,sr3m] = useState('R3');
  const [rd1,srd1] = useState(''); // rd = reddit description
  const [rd2,srd2] = useState(''); // rd = reddit description
  const [rd3,srd3] = useState(''); // rd = reddit description
  const [rbvis,srbvis] = useState(false);
  const [pvis,spvis] = useState(false);
  const [pn,spn] = useState(0); // pn = post number
  const [p1m,sp1m] = useState('P1');
  const [p2m,sp2m] = useState('P2');
  const [p3m,sp3m] = useState('P3');
  const [pbvis,spbvis] = useState(false);
  const [cvis,scvis] = useState(false);
  const [cn,scn] = useState(0); // cn = comment number
  const [c1m,sc1m] = useState('C1');
  const [c2m,sc2m] = useState('C2');
  const [c3m,sc3m] = useState('C3');
  const [cbvis,scbvis] = useState(false);
  const [svis,ssvis] = useState(false);
  const [vvis,svvis] = useState(false);

  const fetchReddits = async() => {
    console.log("Resetting From Fetch Reddits")
    srvis(false);
    srbvis(false);
    srn(0);
    spvis(false);
    spbvis(false);
    spn(0);
    scvis(false);
    scbvis(false);
    scn(0);
    ssvis(false);
    svvis(false);
    console.log("Starting Fetch Reddits")

    try {
      const endpoint = `https://www.reddit.com/r/${csi}/top/.json?limit=8`;
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      try {
        sr1m(data.data.children[0].data.title);
        sr2m(data.data.children[1].data.title);
        sr3m(data.data.children[2].data.title);

      // console.log("Fetched Reddits" + data.data.children[0].data.permalink)
      // console.log("https://www.reddit.com" + data.data.children[0].data.permalink + ".json");
      // console.log(data.data.children[0].data.selftext)
      // console.log("https://www.reddit.com" + data.data.children[1].data.permalink + ".json");
      // console.log(data.data.children[1].data.selftext)

        console.log("Link for reddit #7")
        console.log("https://www.reddit.com" + data.data.children[7].data.permalink + ".json");
        console.log(data.data.children[7].data.selftext)
        srd1(data.data.children[0].data.selftext);
        srd2(data.data.children[1].data.selftext);
        srd3(data.data.children[2].data.selftext);
      } catch (error) {
        console.log(error);
      }


    } catch (error) {
      console.log(error);
    }

    console.log("Done")
    srvis(true);
  }

  const selectReddit = (i) => {
    console.log("Selected Reddit Option "+i);
    if(i==1) {
      console.log("Selected Reddit Option 1");
      console.log(rd1);
    } else if(i==2) {
      console.log("Selected Reddit Option 2");
      console.log(rd2);
    } else if(i==3) {
      console.log("Selected Reddit Option 3");
      console.log(rd3);
    }
    srbvis(true);
    srn(i)
  }

  const fetchPosts = async() => {
    console.log("Resetting From Fetch Posts")
    spvis(false);
    spbvis(false);
    spn(0)
    scvis(false);
    scbvis(false);
    scn(0);
    ssvis(false);
    svvis(false);
    console.log("Starting Fetch Posts")

    try {
      const endpoint = `https://www.reddit.com/r/${csi}/top/.json?limit=5`;
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      let permalink = data.data.children[rn-1].data.permalink;
      console.log(permalink)
      sp1m(data.data.children[0].data.title);
      sp2m(data.data.children[1].data.title);
      sp3m(data.data.children[2].data.title);
    } catch (error) {
      console.log(error);
    }

    console.log("Done")
    spvis(true);
  }

  const selectPost = (i) => {
    console.log("Selected Post Option "+i);
    spbvis(true);
    spn(i)
  }

  const fetchComments = async() => {
    console.log("Resetting From Fetch Comments")
    scvis(false);
    scbvis(false);
    scn(0);
    ssvis(false);
    svvis(false);
    console.log("Starting Fetch Comments")

    console.log("Done")
    scvis(true);
  }

  const selectComment = (i) => {
    console.log("Selected Comment Option "+i);
    scbvis(true);
    scn(i)
  }

  const fetchReply = async() => {
    console.log("Resetting From Fetch Reply")
    ssvis(false);
    svvis(false);
    console.log("Starting Fetch Reply")

    console.log("Done")
    ssvis(true);
    svvis(true);
  }


  return (
    <div className="App">
      <div style={{position:"fixed",backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundImage:`url(${bg})`,top:"2px",left:"0px",right:"0px",zIndex:"-1",bottom:"0px"}}></div>
      <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"0%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        <input placeholder='Search For Community...' style={{position:"fixed",left:"10%",top:"4%",height:"12%",borderRadius:"10%",width:"65%",zIndex:"2",fontSize:"20px"}} type="text" value={csi} onChange={e => scsi(e.target.value)} />
        <button style={{position:"fixed",left:"80%",top:"6%",height:"8%",borderRadius:"10%",width:"14%",zIndex:"2",fontSize:"20px",background:"blue"}} onClick={fetchReddits}>👆</button>
      </div>
      <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"20%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        {rvis && <div>
          <div style={rn==1 ? {position:"fixed",top:"21%",height:"8%",left:"6%",width:"28%",opacity:"0.9",background:"pink"} : {position:"fixed",top:"21%",height:"8%",left:"6%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(1)}>{r1m}</div>
          <div style={rn==2 ? {position:"fixed",top:"21%",height:"8%",left:"36%",width:"28%",opacity:"0.9",background:"pink"} : {position:"fixed",top:"21%",height:"8%",left:"36%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(2)}>{r2m}</div>
          <div style={rn==3 ? {position:"fixed",top:"21%",height:"8%",left:"66%",width:"28%",opacity:"0.9",background:"pink"} : {position:"fixed",top:"21%",height:"8%",left:"66%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(3)}>{r3m}</div>
        </div> }
        {rbvis && <button style={{position:"fixed",top:"31%",height:"8%",left:"35%",width:"30%",background:"white",opacity:"0.9"}} onClick={fetchPosts}>Select</button>}
      </div>
      <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"40%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        {pvis && <div>
          <div style={pn==1 ? {position:"fixed",top:"41%",height:"8%",left:"6%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"41%",height:"8%",left:"6%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectPost(1)}>{p1m}</div>
          <div style={pn==2 ? {position:"fixed",top:"41%",height:"8%",left:"36%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"41%",height:"8%",left:"36%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectPost(2)}>{p2m}</div>
          <div style={pn==3 ? {position:"fixed",top:"41%",height:"8%",left:"66%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"41%",height:"8%",left:"66%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectPost(3)}>{p3m}</div>
        </div>}
        {pbvis && <button style={{position:"fixed",top:"51%",height:"8%",left:"35%",width:"30%",background:"white",opacity:"0.9"}} onClick={fetchComments}>Fetch Comments</button>}
      </div>
      <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"60%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        {cvis && <div>
          <div style={cn==1 ? {position:"fixed",top:"61%",height:"8%",left:"6%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"61%",height:"8%",left:"6%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectComment(1)}>{c1m}</div>
          <div style={cn==2 ? {position:"fixed",top:"61%",height:"8%",left:"36%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"61%",height:"8%",left:"36%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectComment(2)}>{c2m}</div>
          <div style={cn==3 ? {position:"fixed",top:"61%",height:"8%",left:"66%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"61%",height:"8%",left:"66%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectComment(3)}>{c3m}</div>
        </div>}
        {cbvis && <button style={{position:"fixed",top:"71%",height:"8%",left:"35%",width:"30%",background:"white",opacity:"0.9"}} onClick={fetchReply}>Reply</button>}
      </div>
      <div style={{position:"fixed",opacity:"1",top:"80%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        {svis && <div style={{position:"fixed",top:"81%",height:"8%",left:"25%",width:"50%",background:"white",opacity:"0.9"}}>Summary</div>}
        {vvis && <div style={{position:"fixed",top:"91%",height:"8%",left:"25%",width:"50%",background:"white",opacity:"0.9"}}>View</div>}
      </div>
    </div>
  );
}

export default App;
