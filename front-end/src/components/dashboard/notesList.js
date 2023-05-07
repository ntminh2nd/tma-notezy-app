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
				<div id='note-full-container' class='note-has-grid row'>
					<div class='col-md-4 single-note-item all-category'>
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
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-important'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Go for lunch'>
								Go for lunch <i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>01 April 2002</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-social'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Meeting with Mr.Jojo'>
								Meeting with Mr.Jojo{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>19 October 2020</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-business'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Give Review for design'>
								Give Review for design{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>02 January 2000</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-social'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Nightout with friends'>
								Nightout with friends{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>01 August 1999</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-important'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Launch new template'>
								Launch new template{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>21 January 2015</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-social'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Change a Design'>
								Change a Design <i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>25 December 2016</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-business'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Give review for foods'>
								Give review for foods{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>18 December 2020</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-md-4 single-note-item all-category note-important'>
						<div class='card card-body'>
							<span class='side-stick'></span>
							<h5
								class='note-title text-truncate w-75 mb-0'
								data-noteheading='Give salary to employee'>
								Give salary to employee{' '}
								<i class='point fa fa-circle ml-1 font-10'></i>
							</h5>
							<p class='note-date font-12 text-muted'>15 Fabruary 2020</p>
							<div class='note-content'>
								<p
									class='note-inner-content text-muted'
									data-notecontent='Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.'>
									Blandit tempus porttitor aasfs. Integer posuere erat a ante
									venenatis.
								</p>
							</div>
							<div class='d-flex align-items-center'>
								<span class='mr-1'>
									<i class='fa fa-star favourite-note'></i>
								</span>
								<span class='mr-1'>
									<i class='fa fa-trash remove-note'></i>
								</span>
								<div class='ml-auto'>
									<div class='category-selector btn-group'>
										<a
											class='nav-link dropdown-toggle category-dropdown label-group p-0'
											data-toggle='dropdown'
											href='#'
											role='button'
											aria-haspopup='true'
											aria-expanded='true'>
											<div class='category'>
												<div class='category-business'></div>
												<div class='category-social'></div>
												<div class='category-important'></div>
												<span class='more-options text-dark'>
													<i class='icon-options-vertical'></i>
												</span>
											</div>
										</a>
										<div class='dropdown-menu dropdown-menu-right category-menu'>
											<a
												class='note-business badge-group-item badge-business dropdown-item position-relative category-business text-success'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>
												Business
											</a>
											<a
												class='note-social badge-group-item badge-social dropdown-item position-relative category-social text-info'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Social
											</a>
											<a
												class='note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger'
												href='javascript:void(0);'>
												<i class='mdi mdi-checkbox-blank-circle-outline mr-1'></i>{' '}
												Important
											</a>
										</div>
									</div>
								</div>
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
				<div class='modal-dialog modal-dialog-centered' role='document'>
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
									<form action='javascript:void(0);' id='addnotesmodalTitle'>
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
							<button id='btn-n-save' class='float-left btn btn-success'>
								Save
							</button>
							<button class='btn btn-danger' data-dismiss='modal'>
								Discard
							</button>
							<button id='btn-n-add' class='btn btn-info' disabled='disabled'>
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
