import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {flatListToTree} from './utils/tree.util';
import {createRows} from './utils/tree-table.util';

class TreeTable extends Component {
	static defaultProps = {
		items: [],
		isCloseAll: undefined,
	};

	constructor(props) {
		super(props);
		this.state = {
			roots: flatListToTree(this.props.items),
			toggleMap: {}
		};
	}

	onToggleClick = (toggleId) => {
		const toggleMap = {...this.state.toggleMap};
		toggleMap[toggleId] = !toggleMap[toggleId];
		this.setState({toggleMap});
	};

	closeAll = () => {
		const toggleMap = {...this.state.toggleMap};
		for (let key in toggleMap) {
			toggleMap[key] = true;
		}
		console.log(toggleMap);
		this.setState({toggleMap});
	};

	openAll = () => {
		const toggleMap = {...this.state.toggleMap};
		for (let key in toggleMap) {
			toggleMap[key] = false;
		}
		console.log(toggleMap);
		this.setState({toggleMap});
	};

	render() {

		const columns = this.props.columns.map(col => {
			let style = {};
			if (col.width) {
				style = {width: col.width};
			}
			return (
				<th
					key={col.key}
					style={style}
				>{col.name}</th>
			);
		});

		let rows = [];
		for (let i = 0; i < this.state.roots.length; i++) {
			const row = this.state.roots[i];
			createRows(rows,
				columns,
				row,
				0,
				'',
				this.onToggleClick,
				this.state.toggleMap);
		}
		return (
			<div className="tree-table-wrap">
				<table className="tree-table">
					<thead>
						<tr>
							{columns}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
}

TreeTable.propTypes = {
	items: PropTypes.array,
	columns: PropTypes.array,
	toggleFn: PropTypes.func
};

export default TreeTable;
