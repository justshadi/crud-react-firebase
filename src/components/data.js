function Data(props) {
    let meetings = props.meetings.map((data) => {
      return {
        time: data.time,
        creator: data.blocks,
        version: data.version
      };
    });
    return {
        time: meetings[0],
        blocks: meetings[0].creator,
        version: meetings[0],

}
;
  }
  
  export default Data;