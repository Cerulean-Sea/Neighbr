import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

var PostTags = (props) => (
    <div>
        <FormControl component="fieldset">
            <FormLabel component="legend">Tags</FormLabel>
            <RadioGroup>
                <FormControlLabel value="Happenings" control={<Radio />} label="Happenings" onClick={props.selectTag}  />
                <FormControlLabel value="Swaps" control={<Radio />} label="Swaps" onClick={props.selectTag}  />
                <FormControlLabel value="Safety" control={<Radio />} label="Safety" onClick={props.selectTag}  />
                <FormControlLabel value="Favors" control={<Radio />} label="Favors" onClick={props.selectTag}  />
                <FormControlLabel value="Chit Chat" control={<Radio />} label="Chit Chat" onClick={props.selectTag}  />
            </RadioGroup>
        </FormControl>

    </div>
)

export default PostTags;





// var PostTags = (props) => (
//     <div>
//         <h4>Tags</h4>
//         <input type="radio" name="tags" value="Happenings" onClick={props.selectTag} />
//         <label>Happenings</label>
//         <input type="radio" name="tags" value="Swaps" onClick={props.selectTag} />
//         <label>Swaps</label>
//         <input type="radio" name="tags" value="Safety" onClick={props.selectTag} />
//         <label>Safety</label>
//         <input type="radio" name="tags" value="Favors" onClick={props.selectTag} />
//         <label>Favors</label>
//         <input type="radio" name="tags" value="Chit Chat" onClick={props.selectTag} />
//         <label>Chit Chat</label>

//     </div>
// )
