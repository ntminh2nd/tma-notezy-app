/** @format */

import React from 'react';

// CSS
import '../../bootstrap/notes.css';

// Imports
import Header from './header';

function NotesList(props) {
	const userInfo = {
		userName: props.userName,
		email: props.email,
	};    
	return (
		<div class='page-content container note-has-grid'>
			<Header {...userInfo} />
			<div class='tab-content bg-transparent'>
				<div
					id='note-full-container'
					class='note-has-grid row'>
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

			{/* Modal Add notes */}
			<div
				class='modal fade'
				id='addnotesmodal'
				tabindex='-1'
				role='dialog'
				aria-labelledby='addnotesmodalTitle'
				aria-hidden='true'>
				<div
					class='modal-dialog modal-dialog-centered'
					role='document'>
					<div class='modal-content border-0'>
						<div class='modal-header bg-info text-white'>
							<h5 class='modal-title text-white'>Add Notes</h5>
							<button
								type='button'
								class='close text-white'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>×</span>
							</button>
						</div>
						<div class='modal-body'>
							<div class='notes-box'>
								<div class='notes-content'>
									<form
										action='javascript:void(0);'
										id='addnotesmodalTitle'>
										<div class='row'>
											<div class='col-md-12 mb-3'>
												<div class='note-title'>
													<label>Note Title</label>
													<input
														type='text'
														id='note-has-title'
														class='form-control'
														minlength='25'
														placeholder='Title'
													/>
												</div>
											</div>

											<div class='col-md-12'>
												<div class='note-description'>
													<label>Note Description</label>
													<textarea
														id='note-has-description'
														class='form-control'
														minlength='60'
														placeholder='Description'
														rows='3'></textarea>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class='modal-footer'>
							<button
								id='btn-n-save'
								class='float-left btn btn-success'>
								Save
							</button>
							<button
								class='btn btn-danger'
								data-dismiss='modal'>
								Discard
							</button>
							<button
								id='btn-n-add'
								class='btn btn-info'
								disabled='disabled'>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotesList;
