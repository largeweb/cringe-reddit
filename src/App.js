import logo from './logo.svg';
import { useState } from 'react';
import bg from './images/bg-cr.png'
import './App.css';

function App() {

  const cringe_response = "you are a cringe reddit fool. you are given a description of a reddit post and you must come up with a response that is very cringy and a very judgemental of the person in post. you must be very specific about details regarding the poster and dogmatic about your response, you also must sound self-centered and self-righteous. here is the description of the reddit post: "

  const [csi, scsi] = useState('');
  const [rn,srn] = useState(0); // rn = reddit number
  const [ci,sci] = useState('test'); // ci = cringe input
  const [dt,sdt] = useState('');
  const [ds,sds] = useState('');
  const [pt,spt] = useState('popup text'); // pt = popup text
  const [plc,splc] = useState('') // plc = perma link chosen
  const [rlt,srlt] = useState('LOADING...'); // rlt = reddit loading text
  const [rlp,srlp] = useState(0); // rlp = reddit loading progress
  const [r1m,sr1m] = useState('R1');
  const [r2m,sr2m] = useState('R2');
  const [r3m,sr3m] = useState('R3');
  const [r4m,sr4m] = useState('R4');
  const [r5m,sr5m] = useState('R5');
  const [r6m,sr6m] = useState('R6');
  const [rd1,srd1] = useState(''); // rd = reddit description
  const [rd2,srd2] = useState(''); // rd = reddit description
  const [rd3,srd3] = useState(''); // rd = reddit description
  const [rd4,srd4] = useState(''); // rd = reddit description
  const [rd5,srd5] = useState(''); // rd = reddit description
  const [rd6,srd6] = useState(''); // rd = reddit description
  const [r1pl,sr1pl] = useState(''); // r1pl = reddit 1 permalink
  const [r2pl,sr2pl] = useState(''); // r1pl = reddit 1 permalink
  const [r3pl,sr3pl] = useState(''); // r1pl = reddit 1 permalink
  const [r4pl,sr4pl] = useState(''); // r1pl = reddit 1 permalink
  const [r5pl,sr5pl] = useState(''); // r1pl = reddit 1 permalink
  const [r6pl,sr6pl] = useState(''); // r1pl = reddit 1 permalink
  const [cr, scr] = useState(''); // cr = cringe response
  const [rvis,srvis] = useState(false); // rvis = reddits visible
  const [pvis,spvis] = useState(false); // pvis = BIG prompt visible
  const [pcvis,spcvis] = useState(false); // pcvis = prompt close visible
  const [rlvis,srlvis] = useState(false); // rlvis = reddit loading visible
  const [dvvis,sdvvis] = useState(false); // dvvis = display view visible
  const [cmbvis,scmbvis] = useState(false); // cmbvis = cringe mode button visible
  const [crvis,scrvis] = useState(false); // crvis = cringe response visible
  const [vvis, svvis] = useState(false); // vvis = view visible
  const [rbvis, srbvis] = useState(false); // rbvis = reply button visible

  const fetchReddits = async() => {
    console.log("Resetting From Fetch Reddits")
    srn(0);
    srlp(0);
    spvis(false);
    srvis(false);
    srlvis(true);
    sdvvis(false);
    scmbvis(false);
    scrvis(false);
    svvis(false);
    srbvis(false);
    srd1('');
    srd2('');
    srd3('');
    srd4('');
    srd5('');
    srd6('');
    console.log("Starting Fetch Reddits")

    try {
      const endpoint = `https://www.reddit.com/search.json?q=${encodeURIComponent(csi)}`;
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      console.log(endpoint)
      console.log(data)
      // console.log(data.data.children[0].data.title)
      try {
        sr1m(data.data.children[0].data.title);
        // srd1(data.data.children[0].data.selftext);
        sr1pl("https://reddit.com" + data.data.children[0].data.permalink + ".json")
        try {
          console.log("fetching child 1 permalink " + r1pl)
          srlp(1);
          const r1res = await fetch(`${r1pl}`);
          const d1 = await r1res.json();
          srd1(d1[0].data.children[0].data.selftext)
          // console.log("response is: " + d1.data.children[0].data.selftext)
        } catch(error) {console.log(error); }
      } catch (error) { console.log(error); }
      try {
        sr2m(data.data.children[1].data.title);
        // srd2(data.data.children[1].data.selftext);
        sr2pl("https://reddit.com" + data.data.children[1].data.permalink + ".json")
        try {
          console.log("fetching child 2 permalink " + r2pl)
          srlp(2);
          const r2res = await fetch(`${r2pl}`);
          const d2 = await r2res.json();
          srd2(d2[0].data.children[0].data.selftext)
          // console.log("response is: " + d2.data.children[0].data.selftext)
        } catch(error) {console.log(error); }
      } catch (error) { console.log(error); }
      try {
        sr3m(data.data.children[2].data.title);
        // srd3(data.data.children[2].data.selftext);
        sr3pl("https://reddit.com" + data.data.children[2].data.permalink + ".json")
        try {
          console.log("fetching child 3 permalink " + r3pl)
          srlp(3);
          const r3res = await fetch(`${r3pl}`);
          const d3 = await r3res.json();
          srd3(d3[0].data.children[0].data.selftext)
          // console.log("response is: " + d3.data.children[0].data.selftext)
        } catch(error) {console.log(error); }
      } catch (error) { console.log(error); }
      try {
        sr4m(data.data.children[3].data.title);
        // srd4(data.data.children[3].data.selftext);
        sr4pl("https://reddit.com" + data.data.children[3].data.permalink + ".json")
        try {
          console.log("fetching child 4 permalink " + r4pl)
          srlp(4);
          const r4res = await fetch(`${r4pl}`);
          const d4 = await r4res.json();
          srd4(d4[0].data.children[0].data.selftext)
          // console.log("response is: " + d4.data.children[0].data.selftext)
        } catch(error) {console.log(error); }
      } catch (error) { console.log(error); }
      try {
        sr5m(data.data.children[4].data.title);
        // srd5(data.data.children[4].data.selftext);
        sr5pl("https://reddit.com" + data.data.children[4].data.permalink + ".json")
        try {
          console.log("fetching child 5 permalink " + r5pl)
          srlp(5);
          const r5res = await fetch(`${r5pl}`);
          const d5 = await r5res.json();
          srd5(d5[0].data.children[0].data.selftext)
          // console.log("response is: " + d5.data.children[0].data.selftext)
        } catch(error) {console.log(error); }
      } catch (error) { console.log(error); }
      try {
        sr6m(data.data.children[5].data.title);
        // srd6(data.data.children[5].data.selftext);
        sr6pl("https://reddit.com" + data.data.children[5].data.permalink + ".json")
        try {
          console.log("fetching child 6 permalink " + r6pl)
          srlp(6);
          const r6res = await fetch(`${r6pl}`);
          const d6 = await r6res.json();
          srd6(d6[0].data.children[0].data.selftext)
          // console.log("response is: " + d6.data.children[0].data.selftext)
        } catch(error) {console.log(error); }
      } catch (error) { console.log(error); }
    } catch (error) { console.log(error); }
    // console.log("Done")
    // console.log("r1m (title) is " + r1m);
    // console.log("rd1 (selftext) is " + rd1);
    // console.log("r2m (title) is " + r2m);
    // console.log("rd2 (selftext) is " + rd2);
    // console.log("link to first link is " + r1pl);
    srlvis(false);
    srvis(true);
  }

  const selectReddit = (i) => {
    sdt('')
    sds('')
    console.log("Selected Reddit Option "+i);
    if(i==1) {
      console.log("Selected Reddit Option 1");
      console.log(rd1);
      console.log(r1m);
      sdt(r1m);
      sds(rd1);
      splc(r1pl);
    } else if(i==2) {
      console.log("Selected Reddit Option 2");
      console.log(rd2);
      console.log(r2m);
      sdt(r2m);
      sds(rd2);
      splc(r2pl);
    } else if(i==3) {
      console.log("Selected Reddit Option 3");
      console.log(rd3);
      console.log(r3m);
      sdt(r3m);
      sds(rd3);
      splc(r3pl);
    } else if(i==4) {
      console.log("Selected Reddit Option 4");
      console.log(rd4);
      console.log(rd4);
      sdt(r4m);
      sds(rd4);
      splc(r4pl);
    } else if(i==5) {
      console.log("Selected Reddit Option 5");
      console.log(rd5);
      sdt(r5m);
      sds(rd5);
      splc(r5pl);
    } else if(i==6) {
      console.log("Selected Reddit Option 6");
      console.log(rd6);
      sdt(r6m);
      sds(rd6);
      splc(r6pl);
    }
    sdvvis(true);
    scmbvis(true);
    srn(i)
  }

  const cringeMode = async() => {
    console.log("Cringe Mode Activated");
    svvis(false);
    scrvis(true);
    srbvis(false);
    scr("Sending to server...");
    let tci = cringe_response + dt + " " + ds
    tci = tci.replace(/\n/g, " ");
    tci = tci.replace(/\'/g, " ");
    sci(tci);

    try {
      const response = await fetch('http://localhost:5000/gpt-gen', {
        method: 'POST',
        // body: {input: input}
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "input": ci })
      })
      console.log("HERE IS THE DATA:")
      const data = await response.json()
      console.log("..........")
      console.log(data)
      console.log(data.choices[0].text)
      scr(data.choices[0].text)
      srbvis(true)
    } catch (error) {
      console.log(error)
    }



    // svvis(true);
    // scrvis(true);
  }

  const expandPrompt = (i) => {
    console.log("Expanding Prompt");
    spvis(true);
    spcvis(true);
    (i==1) ? spt(dt+" "+ds) : spt(cr);
  }

  const closePrompt = () => {
    console.log("Closing Prompt");
    spvis(false);
    spcvis(false);
  }

  const reply = async() => {
    console.log("Replying to Reddit Post");

    // TRY BLOCK CREATED BY COPILOT
    // try {
      // const response = await fetch('http://localhost:5000/reply', {
        // method: 'POST',
        // body: {input: input}
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ "input": cr, "link": plc })
      // })
      // console.log("HERE IS THE DATA:")
      // const data = await response.json()
      // console.log("..........")
      // console.log(data)
      // console.log(data.choices[0].text)
      // scr(data.choices[0].text)
      // srbvis(true)
    // } catch (error) {
      // console.log(error)
    // }
    svvis(true);
  }

  // const fetchPosts = async() => {
  //   console.log("Resetting From Fetch Posts")
  //   console.log("Starting Fetch Posts")

  //   try {
  //     const endpoint = `https://www.reddit.com/r/${csi}/top/.json?limit=6`;
  //     const response = await fetch(`${endpoint}`);
  //     const data = await response.json();
  //     console.log("title is: " + data.data.children[0].data.title)
  //     let permalink = data.data.children[rn-1].data.permalink;
  //     console.log("permalink is: " + permalink)
  //     sr1m(data.data.children[0].data.title);
  //     sr2m(data.data.children[1].data.title);
  //     sr3m(data.data.children[2].data.title);
  //     sr4m(data.data.children[3].data.title);
  //     sr5m(data.data.children[4].data.title);
  //     sr6m(data.data.children[5].data.title);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   console.log("Done")
  // }

  // const selectPost = (i) => {
  //   console.log("Selected Post Option "+i);
  // }

  // const fetchComments = async() => {
  //   console.log("Resetting From Fetch Comments")
  //   console.log("Starting Fetch Comments")

  //   console.log("Done")
  // }

  // const selectComment = (i) => {
  //   console.log("Selected Comment Option "+i);
  // }

  // const fetchReply = async() => {
  //   console.log("Resetting From Fetch Reply")
  //   console.log("Starting Fetch Reply")

  //   console.log("Done")
  // }


  return (
    <div className="App">
      <div style={{position:"fixed",backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundImage:`url(${bg})`,top:"2px",left:"0px",right:"0px",zIndex:"-1",bottom:"0px"}}></div>
      {/* SEARCH AREA */}
      <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"0%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        <input placeholder='Search For Community...' style={{position:"fixed",left:"10%",top:"4%",height:"12%",borderRadius:"10%",width:"65%",zIndex:"2",fontSize:"20px"}} type="text" value={csi} onChange={e => scsi(e.target.value)} />
        <button style={{position:"fixed",left:"80%",top:"6%",height:"8%",borderRadius:"10%",width:"14%",zIndex:"2",fontSize:"20px",background:"blue"}} onClick={fetchReddits}>👆</button>
      </div>
      {/* REDDIT POST BUBBLES */}
      <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"20%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}>
        {rlvis && <div style={{position:"fixed",top:"20%",left:"10%",width:"80%",background:"white",fontSize:"40px",textAlign:"center",border:"5px solid gray"}}>
          {rlt} ({rlp}/6)
        </div>}
        {rvis && <div>
          <div style={rn==1 ? {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"19%",height:"5%",left:"6%",width:"28%",opacity:"0.9",background:"pink"} : {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"19%",height:"5%",left:"6%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(1)}>{r1m}</div>
          <div style={rn==2 ? {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"19%",height:"5%",left:"36%",width:"28%",opacity:"0.9",background:"pink"} : {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"19%",height:"5%",left:"36%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(2)}>{r2m}</div>
          <div style={rn==3 ? {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"19%",height:"5%",left:"66%",width:"28%",opacity:"0.9",background:"pink"} : {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"19%",height:"5%",left:"66%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(3)}>{r3m}</div>
          <div style={rn==4 ? {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"26%",height:"5%",left:"6%",width:"28%",opacity:"0.9",background:"pink"} : {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"26%",height:"5%",left:"6%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(4)}>{r4m}</div>
          <div style={rn==5 ? {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"26%",height:"5%",left:"36%",width:"28%",opacity:"0.9",background:"pink"} : {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"26%",height:"5%",left:"36%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(5)}>{r5m}</div>
          <div style={rn==6 ? {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"26%",height:"5%",left:"66%",width:"28%",opacity:"0.9",background:"pink"} : {overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",borderRadius:"10%",position:"fixed",top:"26%",height:"5%",left:"66%",width:"28%",opacity:"0.9",background:"white"}} onClick={(e) => selectReddit(6)}>{r6m}</div>
        </div> }
        {/* SUMMARY BOX AREA */}
        {dvvis && <div style={{borderRadius:"12%",overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis",border:"5px solid gray",position:"fixed",top:"34%",height:"17%",left:"10%",width:"80%",background:"white",opacity:"0.9"}}>
          <a href={plc.substring(0,plc.length-5)} target='_blank' style={{fontSize:"15px"}}>view post on reddit</a>
          <div style={{fontSize:"18px",overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis"}}>{dt}</div>
          <hr></hr>
          <div style={{fontSize:"13px",overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis"}}>{ds}</div>
          {/* PROMPT OPEN 1 */}
          <button onClick={(e) => expandPrompt(1)} style={{position:"fixed",top:"48%",left:"87%",fontSize:"25px"}}>🍄</button>
        </div>}
        {/* CRINGE MODE BUTTON  */}
        {cmbvis && <div>
          <button style={{position:"fixed",top:"54%",left:"10%",height:"7%",width:"80%",background:"red",borderRadius:"10%",fontSize:"20px"}} onClick={cringeMode}>Cringe Mode</button>
        </div>}
        {/* CRINGE RESPONSE FIELD */}
        {crvis && <div style={{borderRadius:"12%",border:"5px solid gray",position:"fixed",top:"63%",height:"17%",left:"10%",width:"80%",background:"white",opacity:"0.9"}}>
          <div style={{fontSize:"15px",overflow :"hidden",whiteSpace: "wrap",textOverflow: "ellipsis"}}>{cr}</div>
          {/* PROMPT OPEN 2 */}
          <button onClick={(e) => expandPrompt(2)} style={{position:"fixed",top:"77%",left:"87%",fontSize:"25px"}}>🍄</button>
        </div>}
        {/* REPLY BUTTON */}
        {rbvis && <div>
          <button style={{position:"fixed",top:"82%",left:"10%",height:"7%",width:"80%",background:"blue",borderRadius:"10%",fontSize:"20px"}} onClick={reply}>Reply</button>
        </div>}
        {/* VIEW BUTTON */}
        {vvis && <div>
          <button style={{position:"fixed",top:"90%",left:"10%",height:"7%",width:"80%",background:"green",borderRadius:"10%",fontSize:"20px"}}>View</button>
        </div>}
        {/* BIG PROMPT */}
        {pvis && <div style={{padding:"30px",border:"5px solid gray",position:"fixed",top:"30px",height:"90%",left:"30px",right:"30px",background:"white",opacity:"0.9",zIndex:"5"}}>
          {pt}
        </div>}
        {/* PROMPT CLOSE */}
        {pcvis && <button onClick={closePrompt} style={{position:"fixed",zIndex:"10",fontSize:"30px",top:"30px",left:"30px"}}>⏬</button>}
      </div>
      {/* <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"40%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}> */}
        {/* {pvis && <div> */}
          {/* <div style={pn==1 ? {position:"fixed",top:"41%",height:"8%",left:"6%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"41%",height:"8%",left:"6%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectPost(1)}>{p1m}</div> */}
          {/* <div style={pn==2 ? {position:"fixed",top:"41%",height:"8%",left:"36%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"41%",height:"8%",left:"36%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectPost(2)}>{p2m}</div> */}
          {/* <div style={pn==3 ? {position:"fixed",top:"41%",height:"8%",left:"66%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"41%",height:"8%",left:"66%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectPost(3)}>{p3m}</div> */}
        {/* </div>} */}
        {/* {pbvis && <button style={{position:"fixed",top:"51%",height:"8%",left:"35%",width:"30%",background:"white",opacity:"0.9"}} onClick={fetchComments}>Fetch Comments</button>} */}
      {/* </div> */}
      {/* <div style={{position:"fixed",border:"0px solid orange",opacity:"1",top:"60%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}> */}
        {/* {cvis && <div> */}
          {/* <div style={cn==1 ? {position:"fixed",top:"61%",height:"8%",left:"6%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"61%",height:"8%",left:"6%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectComment(1)}>{c1m}</div> */}
          {/* <div style={cn==2 ? {position:"fixed",top:"61%",height:"8%",left:"36%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"61%",height:"8%",left:"36%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectComment(2)}>{c2m}</div> */}
          {/* <div style={cn==3 ? {position:"fixed",top:"61%",height:"8%",left:"66%",width:"28%",background:"pink",opacity:"0.9"} : {position:"fixed",top:"61%",height:"8%",left:"66%",width:"28%",background:"white",opacity:"0.9"}} onClick={(e) => selectComment(3)}>{c3m}</div> */}
        {/* </div>} */}
        {/* {cbvis && <button style={{position:"fixed",top:"71%",height:"8%",left:"35%",width:"30%",background:"white",opacity:"0.9"}} onClick={fetchReply}>Reply</button>} */}
      {/* </div> */}
      {/* <div style={{position:"fixed",opacity:"1",top:"80%",left:"0%",width:"100%",height:"20%",zIndex:"1"}}> */}
        {/* {svis && <div style={{position:"fixed",top:"81%",height:"8%",left:"25%",width:"50%",background:"white",opacity:"0.9"}}>Summary</div>} */}
        {/* {vvis && <div style={{position:"fixed",top:"91%",height:"8%",left:"25%",width:"50%",background:"white",opacity:"0.9"}}>View</div>} */}
      {/* </div> */}
    </div>
  );
}

export default App;
