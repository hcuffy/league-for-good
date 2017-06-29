import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import getRowData, { colData } from './data.jsx';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import { cssContent } from '../../../style.js';


const PlayerList = props => {
	const leagueId = props.location.state.leagueId;
	return (
		<div style={cssContent.body}>
			<IconButton
				onTouchTap={() => props.history.goBack()}
				>
				<BackArrow/>
			</IconButton>
			<TableTemplate
				headers={colData}
				rows={getRowData( props.players, leagueId )}
			/>
		</div>
	);
};


function mapStateToProps(state) {
	return { players: state.league.selected.pending_players };
}

export default connect(mapStateToProps)(PlayerList);
