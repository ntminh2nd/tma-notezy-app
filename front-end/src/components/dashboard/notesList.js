/** @format */

import React from 'react';

// CSS
import '../../bootstrap/notes.css';

// Imports
import Header from './header';
import SearchBar from './searchBar';

// Dependencies

function NotesList(props) {
	const userInfo = {
		userName: props.userName,
		email: props.email,
	};
	return (
		<div class='page-content container note-has-grid'>
			<Header {...userInfo} />
			<SearchBar />
			<div class='tab-content bg-transparent'>
				<div id='note-full-container' class='note-has-grid row'>
					<div class='col-md-4 single-note-item unselectable-text'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Book a Ticket for Movie'>
								Book a Ticket for Movie{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>11 March 2009</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-truncate text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatisBlandit tempus porttitor aasfs. Integer posuere erat
									a ante venenatisBlandit tempus porttitor aasfs. Integer
									posuere erat a ante venenatisBlandit tempus porttitor aasfs.
									Integer posuere erat a ante venenatisBlandit tempus porttitor
									aasfs. Integer posuere erat a ante venenatisBlandit tempus
									porttitor aasfs. Integer posuere erat a ante venenatis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotesList;
