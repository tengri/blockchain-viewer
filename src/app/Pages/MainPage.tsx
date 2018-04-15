import * as React from 'react';

import {connect, Dispatch} from 'react-redux';
import {IAppState, IBlock} from '../Models';
import {BlockActions} from '../Modules/Blocks/BlocksActions';
import {BlockService} from "../Modules/Blocks/BlockService";
import {BlockList} from "../Modules/Blocks/Componens/BlockList";


interface IProps {
    blocks: IBlock[];
}

class MainPageComponent extends React.Component<IProps> {
    render () {
        return (
            <div>main</div>
        )
    }
}

function mapStateToProps (state: IAppState) {
    return {
        blocks: state.blocks.data
    }
}
//
//
// function mapDispatchToProps(dispatch: Dispatch<any>) {
//     return { actions: new BlockActions(new BlockService(), dispatch) }
// }

export const MainPage = connect(mapStateToProps, null)(MainPageComponent);