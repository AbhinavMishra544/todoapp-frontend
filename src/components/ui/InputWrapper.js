import React from 'react';
import InputBox from './InputBox';
import {MODE_CREATE} from '../../services/mode';

export default function InputWrapper(props) {
    const {mode, handleInputBoxVal} = props;
    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{handleInputBoxVal}}/>;

        default:
            return null;
    }
}
