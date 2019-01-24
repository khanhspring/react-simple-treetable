import React from 'react';

export const createRows = (rows, columns, currentRow, level, path, toggleFn, toggleMap) => {
	path += currentRow.id + '-';
	toggleMap[path] = !!toggleMap[path] || false;

	let isDisplay = true;
	let isOpen = true;
	for (let key in toggleMap) {
		if (toggleMap[key] === true) {
			if (path.startsWith(key) && path !== key) {
				isDisplay = false;
			}
			if (path === key) {
				isOpen = false;
			}
		}
	}

	let rowTds = columns.map((col, index) => {
		let style = {};
		if (col.width) {
			style = {width: col.width};
		}
		let startOfRow = [];
		if (index === 0) {
			for (let x = 0; x < level; x++) {
				startOfRow.push(<span key={x} className={ 'tree-table-space-block'} ><i /></span>);
			}
			if (currentRow.children) {
				let btnToggleClassName = 'tree-table-space-block btn-toggle';
				if (!isOpen) {
					btnToggleClassName += ' is-close';
				}
				let btnToggle = <span
					key={'btn-toggle'}
					className={btnToggleClassName}
					onClick={() => toggleFn(path)}
				>{isOpen ? '-' : '+'}</span>;
				startOfRow.push(btnToggle);
			} else {
				startOfRow.push(<span key={'last-block'} className="tree-table-space-block last-block"><i /></span>);
			}
		}
		let renderContent;
		if (col.render) {
			renderContent = col.render(currentRow);
		} else {
            renderContent = currentRow[col.key]
		}

		const tdContent = <span className={'tree-table-td-content'}>{renderContent}</span>;
		return (
			<td
				key={col.key}
				style={style}
			>{startOfRow}{tdContent}</td>
		);
	});
	const tableRow = isDisplay && <tr key={currentRow.id}>{rowTds}</tr>;
	rows.push(tableRow);

	if (!currentRow.children) {
		return;
	}
	level++;
	for (let i = 0; i < currentRow.children.length; i++) {
		const row = currentRow.children[i];
		createRows(rows, columns, row, level, path, toggleFn, toggleMap);
	}
};
