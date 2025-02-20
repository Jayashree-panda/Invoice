module.exports = ({ firstName, lastName, company, youtubeLink, githubLink }) => {

  const today = new Date();
return `<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>PDF Result Template</title>
	<style>
		.invoice-box {
			max-width: 800px;
			margin: auto;
			padding: 30px;
			border: 1px solid #eee;
			box-shadow: 0 0 10px rgba(0, 0, 0, .15);
			font-size: 16px;
			line-height: 24px;
			font-family: 'Helvetica Neue', 'Helvetica';
			color: #555;
		}

		.document-edit-view {
			width: 65rem !important;
		}

		.document-edit-block__content {
			position: relative;
			box-sizing: border-box;
			padding: 0.4rem;
			height: auto;
			flex: 1 1 auto;
			font-weight: 500;
			white-space: pre-wrap;
			display: flex;
			flex-direction: column;
		}

		.document-edit-block {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			font-family: Inter, Arial, sans-serif;
			font-size: 0.875rem;
			font-weight: 400;
		}

		.document-edit-block__label {
			font-weight: 400;
			color: black;
			margin: 0.4rem;
		}

		.document-edit-block__label2 {
			font-weight: 400;
			color: black;
			font-size: 0.8rem;
		}

		.document-edit-block__label--consignment {
			font-weight: 400;
			color: black;
			font-size: 0.8rem;
			margin: 0.8rem;
		}

		.document-edit-block__label--consignment_total_amount {
			font-weight: 500;
			font-size: 1rem;
			color: black;
			margin: 0.8rem;
		}

		.document-layout__section {
			display: flex;
			flex-direction: column;
			border: 1px solid #000000;
			box-sizing: border-box;
			position: relative;
			margin-bottom: -1px;
			margin-right: -1px;
			height: 100%;
			width: 100%;
		}

		.document-edit-block {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			font-family: Inter, Arial, sans-serif;
			font-size: 0.875rem;
			font-weight: 400;
		}

		.document-edit-block--right {
			text-align: right;
			float: right;
		}

		.document-edit-block__input--right {
			text-align: right;
			float: right;
		}

		.document-edit-block__page-number {
			margin: 0 0.2rem;
		}

		.drop-down_content-lg {
			max-width: 26rem;
		}

		.drop-down_content-md {
			max-width: 13rem;
		}

		.document-edit-block__layout {
			height: 100%;
			width: 100%;
			justify-content: space-evenly;
		}

		.document-edit-block__layout-block {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;
			width: 100%;
			box-sizing: border-box;
		}

		.block--width-015 {
			min-width: 15%;
			max-width: 15%;
		}

		.block--width-030 {
			min-width: 30%;
			max-width: 30%;
		}

		.block--width-070 {
			min-width: 70%;
			max-width: 70%;
		}

		.block--width-025 {
			min-width: 25%;
			max-width: 25%;
		}

		.block--width-020 {
			min-width: 20%;
			max-width: 20%;
		}

		.document-edit-block__total {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 100%;
			font-weight: 500;
		}

		.document-edit-block__total-symbol {
			margin: 0 0.2rem;
			font-size: 1rem;
			font-weight: 500;
		}

		.document-edit-block__input {
			display: block;
			box-sizing: border-box;
			font-size: 0.875rem;
			font-weight: 500;
			padding: 0.75rem 0.5rem;
			width: 100%;
			height: 100%;
			min-height: 2.5rem;
			flex: 1 1 auto;
			border: none;
			background-color: #f5f6f8;
			border-radius: 6px;
			outline: none;
			color: #031b4e;
			font-family: Inter, Arial, sans-serif;
		}

		.document-edit-block__input:disabled {
			border-bottom: none;
			background: #fff;
			pointer-events: none;
			cursor: not-allowed;
		}

		.document-edit-block--inline {
			display: flex;
			flex-direction: row;
		}

		.document-edit-block--inline * {
			margin: 0 0.4rem 0 0;
		}

		.document-edit-block__textfield {
			border-radius: 6px;
			font-family: Inter, Arial, sans-serif;
			color: #031b4e;
		}

		.react-datepicker__input-container {
			width: auto;
		}

		.document-layout__span {
			text-align: center;
			padding: 0.4rem;
			color: black;
			font-size: 0.8rem;
		}

		.document-edit-block__amount {
			padding: 0.7rem;
			color: black;
			font-weight: 500;
		}

		.document-edit-block__select {
			height: 100%;
			width: 100%;
		}

		.react-datepicker-popper {
			z-index: 2;
		}

		.document-edit-block__datefield {
			border: 1px solid #f5f6f8;
			border-radius: 6px;
		}

		.document-edit-block__datefield:focus {
			border: 1px solid #1890ff;
			border-radius: 6px;
		}

		.document-edit-block__rich-text-editor-wrapper {
			position: relative;
			border: none;
			background-color: #f5f6f8;
			border-radius: 6px;
			outline: none;
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;
		}

		.document-edit-block__rich-text-editor-toolbar {
			display: flex;
			opacity: 0;
			flex: 0 0 auto;
			top: -1.5rem;
			box-sizing: border-box;
			background: #fff;
			border: 1px solid rgba(3, 27, 78, 0.07);
			box-shadow: 0 10px 12px -3px rgba(3, 27, 78, 0.07);
			border-radius: 0.25rem;
			position: absolute;
			right: 0;
			transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
		}

		.document-edit-block__rich-text-editor-editor {
			height: 100%;
			overflow: hidden;
			padding: 0.4rem;
			flex: 1 1 auto;
			cursor: text;
			border: none;
			background-color: #f5f6f8;
			border-radius: 6px;
			outline: none;
		}

		document-edit-block__rich-text-editor-editor:hover {
			filter: brightness(98%);
		}

		.document-edit-block__rich-text-editor-editor--active {
			background-color: #fff !important;
			color: #031b4e;
			box-shadow: inset 0 0 0 1px #004de6;
		}

		.document-edit-block__rich-text-editor-toolbar--active {
			opacity: 1;
			top: -2.5rem;
		}

		.document-edit-block__rich-text-editor-toolbar {
			opacity: 1;
			top: -2.5rem;
			display: flex;
			flex: 0 0 auto;
			box-sizing: border-box;
			background: #fff;
			border: 1px solid rgba(3, 27, 78, 0.07);
			box-shadow: 0 10px 12px -3px rgba(3, 27, 78, 0.07);
			border-radius: 0.25rem;
			position: absolute;
			right: 0;
			transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
		}

		.document-edit-block__rich-text-editor-toolbar .rdw-option-wrapper {
			background: #fff;
			height: 1.5rem;
			width: 1.5rem;
			border: none;
			box-shadow: none;
		}

		.rdw-option-active {
			/* box-shadow: 1px 1px 0px #BFBDBD inset; */
			background: #f5f6f8 !important;
		}

		.public-DraftStyleDefault-ol,
		.public-DraftStyleDefault-ul {
			margin: 0px 0 !important;
			padding: 0;
		}

		.demo-option-custom {
			border: none !important;
		}

		.public-DraftStyleDefault-block {
			margin: 0px 0 !important;
		}

		.document-edit-block__table-button {
			margin: .4rem 0;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
		}

		.btn--2 {
			padding: .5rem .75rem;
			max-height: 2rem;
			font-size: 14px;
			font-size: .875rem;
			font-family: Inter, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			line-height: 1rem;
			vertical-align: middle;
			line-height: .875rem;
		}

		.btn--secondary-blue {
			color: #3370eb;
			background-color: rgba(51, 112, 235, .07);
			fill: #3370eb;
		}

		.btn {
			border: none;
			outline: none;
			position: relative;
			cursor: pointer;
			-webkit-appearance: none;
			border-radius: .375rem;
			white-space: nowrap;
			display: flex;
			transition: background-color 50ms ease-in-out, color 50ms ease-in-out, box-shadow .1s ease-in-out;
			justify-content: center;
			align-items: center;
			font-family: Inter, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			font-weight: 500;
		}

		.btn--2.btn--icon-left .icon {
			margin-right: .375rem;
		}

		.btn .icon {
			transition: fill .1s ease-in-out;
			width: .875rem;
			height: .875rem;
		}

		.document-edit-block__table-content-row-action {
			min-height: 2rem;
			min-width: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: .4rem;
			background: #fff;
			border: 1px solid rgba(3, 27, 78, .2);
			box-shadow: 0 10px 22px -10px rgba(3, 27, 78, .07);
		}

		.document-edit-block__table-content-row-action--danger svg {
			height: 1rem;
			width: 1rem;
			fill: #d1858e;
		}

		.icon--delete {
			margin-right: 0px;
		}

		.ml--0_5 {
			margin-left: .5rem;
		}

		textarea:focus {
			background-color: #fff;
		}

		input:focus {
			background-color: #fff;
		}

		.input-element-modal {
			display: block;
			box-sizing: border-box;
			font-size: 0.875rem;
			font-weight: 500;
			padding: 0.75rem 0.5rem;
			width: 100%;
			height: 100%;
			min-height: 2.5rem;
			flex: 1 1 auto;
			border: none;
			background-color: #f5f6f8;
			border-radius: 6px;
			outline: none;
			color: #031b4e;
			font-family: Inter, Arial, sans-serif;
		}

		.div-element-modal {
			margin: 0.5rem;
		}

		.div-element-title {
			margin: 1rem;
		}

		.additionalInfoButton {
			border: none;
		}

		.addressButton {
			border: none;
		}

		.buttons {
			border-bottom: 1px solid black;
			opacity: 0.3;
			padding: 1rem;
			margin-left: 2rem;
			margin-right: 2rem;
			margin-bottom: 2rem;
		}
	</style>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.5/antd.min.css"
		integrity="sha512-YP6XP/YynNWeZmaIR+YrtoqjiyGMCf0PwtzNaNt56EXySh4lJWcqW1nErpBjP3Io6te5jeqvHkAuRHzbdS4syw=="
		crossorigin="anonymous" />
</head>

<body>
	<div class="invoice-box">
		<h3
			style="text-align: center; font-size: 1.17rem; padding-bottom: 5px;font-weight: bold; line-height: 0;color: black">
			QUOTATION</h3>
		<div class="ant-row">
			<div class="ant-col ant-col-12">
				<div class="document-layout__section">
					<label class="document-edit-block__label">Seller</label>
					<div class="document-edit-block__content drop-down_content-lg">

					</div>
				</div>
			</div>
			<div class="ant-col ant-col-12">
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block  document-edit-block--right">
							<label class="document-edit-block__label">Pages</label>
							<div class="document-edit-block__content">
								<div class="document-edit-block__page-number">1 of 1</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="ant-col ant-col-12">
						<div class="document-layout__section">
							<div class="document-edit-block">
								<label class="document-edit-block__label">
									Quote Number
								</label>
								<div class="document-edit-block__content">adfds <br /></div>
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-12">
						<div class="document-edit-block document-layout__section">
							<label class="document-edit-block__label">Date</label>
							<!-- <div class="document-edit-block__content">
                        <div class="react-datepicker-wrapper">
                          <div class="react-datepicker__input-container">
                            <input type="text" value="20 Sep 2020"
                              class="document-edit-block__input document-edit-block__datefield" />
                          </div>
                        </div>
                      </div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ant-row" style="height:9rem">
			<div class="ant-col ant-col-12">
				<div class="document-layout__section">
					<label class="document-edit-block__label">Buyer</label>
					<div class="document-edit-block__content drop-down_content-lg">

					</div>
				</div>
			</div>
			<div class="ant-col ant-col-12">
				<div class="document-layout__section">
					<div class="document-edit-block__content drop-down_content-lg"></div>
				</div>
			</div>
		</div>
		<div class="ant-row">
			<div class="ant-col ant-col-12">
				<div class="ant-row">
					<div class="ant-col ant-col-12">
						<div class="document-layout__section">
							<div class="document-edit-block">
								<label class="document-edit-block__label">
									Method of Dispatch
								</label>
								<div class="document-edit-block__content drop-down_content-md">

								</div>
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-12">
						<div class="document-layout__section">
							<div class="document-edit-block">
								<label class="document-edit-block__label">
									Type of Shipment
								</label>
								<div class="document-edit-block__content drop-down_content-md">

								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="ant-col ant-col-12">
						<div class="document-layout__section">
							<div class="document-edit-block">
								<label class="document-edit-block__label">
									Port of Loading
								</label>
								<div class="document-edit-block__content drop-down_content-md">

								</div>
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-12">
						<div class="document-layout__section">
							<div class="document-edit-block">
								<label class="document-edit-block__label">
									Port of Discharge
								</label>
								<div class="document-edit-block__content drop-down_content-md">

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ant-col ant-col-12">
				<div class="document-layout__section">
					<label class="document-edit-block__label">
						Terms / Method of Payment
					</label>


				</div>
			</div>
		</div>
		<div class="ant-row">
			<div class="ant-col ant-col-4">
				<div class="document-layout__section">
					<span class="document-layout__span">Product Code</span>
				</div>
			</div>
			<div class="ant-col ant-col-8">
				<div class="document-layout__section">
					<span class="document-layout__span">Description of Goods</span>
				</div>
			</div>
			<div class="ant-col ant-col-3">
				<div class="document-layout__section">
					<span class="document-layout__span">Unit Quantity</span>
				</div>
			</div>
			<div class="ant-col ant-col-3">
				<div class="document-layout__section">
					<span class="document-layout__span">Unit Type</span>
				</div>
			</div>
			<div class="ant-col ant-col-3">
				<div class="document-layout__section">
					<span class="document-layout__span">Price</span>
				</div>
			</div>
			<div class="ant-col ant-col-3">
				<div class="document-layout__section">
					<span class="document-layout__span">Amount</span>
				</div>
			</div>
		</div>
		<div class="ant-row" style="min-height:12rem">
			<div class="document-layout__section" style="min-height:12rem">
				<div class="ant-row">
					<div class="ant-col ant-col-4">
						<div class="document-edit-block">
							<div class="document-edit-block__content document-edit-block--inline">
								<!-- <div title="Delete"
		                          class="document-edit-block__table-content-row-action document-edit-block__table-content-row-action--danger">
		                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="icon icon--delete">
		                            <path
		                              d="M6.33333333,0 L5.5,0.8 L0.5,0.8 L0.5,2.4 L1.42447917,2.4 L2.91048175,14.6046872 L2.91048175,14.6109376 C3.01966833,15.400268 3.73360058,16 4.5625,16 L11.4358725,16 C12.2647717,16 12.9787042,15.4002576 13.0878908,14.6109376 L13.0895183,14.6046872 L14.5755208,2.4 L15.5,2.4 L15.5,0.8 L10.5,0.8 L9.66666667,0 L6.33333333,0 Z M3.10416667,2.4 L12.8958333,2.4 L11.4358725,14.4 L4.5625,14.4 L3.10416667,2.4 Z">
		                            </path>
		                          </svg>
		                        </div> -->
								<!-- <div class="document-edit-block__select css-2b097c-container">
		                          <div class=" css-19am1el-control">
		                            <div class=" css-g1d714-ValueContainer">
		                              <div class=" css-1wa3eu0-placeholder">
		                                Select...
		                              </div>
		                              <div class="css-b8ldur-Input">
		                                <div class="" style="display:inline-block">
		                                  <input type="text" autoCapitalize="none" autoComplete="off" autoCorrect="off"
		                                    id="react-select-8-input" spellcheck="false" tabindex="0" value=""
		                                    aria-autocomplete="list"
		                                    style="box-sizing:content-box;width:1px;label:input;background:0;border:0;font-size:inherit;opacity:1;outline:0;padding:0;color:inherit" />
		                                  <div
		                                    style="position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre">
		                                  </div>
		                                </div>
		                              </div>
		                            </div>
		                            <div class=" css-1hb7zxy-IndicatorsContainer">
		                              <div aria-hidden="true" class=" css-at12u2-loadingIndicator">
		                                <span class="css-1yvy2vo-LoadingDot"></span>
		                                <span class="css-zoievk-LoadingDot"></span>
		                                <span class="css-x748d8-LoadingDot"></span>
		                              </div>
		                              <span class=" css-1xjgjl1-IndicatorSeparator"></span>
		                              <div aria-hidden="true" class=" css-hos8wp-DropdownIndicator">
		                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
		                                  class="css-6q0nyr-Svg">
		                                  <path
		                                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
		                                  </path>
		                                </svg>
		                              </div>
		                            </div>
		                          </div>
		                        </div> -->
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-8">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<!-- <textarea class="ant-input document-edit-block__input document-edit-block__textfield"></textarea> -->
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-3">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<!-- <input type="text"
		                          class="ant-input document-edit-block__input document-edit-block__textfield document-edit-block__input--right"
		                          value="0" /> -->
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-3">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<!-- <input type="text" class="ant-input document-edit-block__input document-edit-block__textfield"
		                          value="" /> -->
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-3">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<!-- <input type="text"
		                          class="ant-input document-edit-block__input document-edit-block__textfield document-edit-block__input--right"
		                          value="0" /> -->
							</div>
						</div>
					</div>
					<div class="ant-col ant-col-3">
						<div class="document-edit-block  document-edit-block--right">
							<label class="document-edit-block__label document-edit-block__amount">
								0.00
							</label>
						</div>
					</div>
				</div>
				<!-- <div class="ant-row">
		                  <div class="document-edit-block__table-button">
		                    <button type="button" class="btn btn--2 btn--secondary-blue btn--icon-left">
		                      <svg width="16px" height="16px" viewBox="0 0 24 24" class="icon icon--addLine">
		                        <path fill="none" d="M0 0h24v24H0V0z"></path>
		                        <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path>
		                      </svg>
		                      Add Line
		                    </button>
		                  </div>
		                </div> -->
			</div>
		</div>
		<div class="ant-row">
			<div class="document-layout__section">
				<div class="ant-row">
					<div class="ant-col ant-col-12">
						<label class="document-edit-block__label--consignment document-edit-block--right">
							Consignment Total
						</label>
					</div>
					<div class="ant-col ant-col-3">
						<label class="document-edit-block__label--consignment_total_amount document-edit-block--right">
							0
						</label>
					</div>
					<div class="ant-col ant-col-9">
						<label class="document-edit-block__label--consignment_total_amount document-edit-block--right">
							0.0
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="ant-row">
			<div class="ant-col ant-col-12">
				<div class="document-layout__section">
					<label class="document-edit-block__label">
						Additional Information
					</label>

				</div>
			</div>
			<div class="ant-col ant-col-12">
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<div class="document-edit-block--inline">
									<!-- <div title="Delete"
		                            class="document-edit-block__table-content-row-action document-edit-block__table-content-row-action--danger">
		                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="icon icon--delete">
		                              <path
		                                d="M6.33333333,0 L5.5,0.8 L0.5,0.8 L0.5,2.4 L1.42447917,2.4 L2.91048175,14.6046872 L2.91048175,14.6109376 C3.01966833,15.400268 3.73360058,16 4.5625,16 L11.4358725,16 C12.2647717,16 12.9787042,15.4002576 13.0878908,14.6109376 L13.0895183,14.6046872 L14.5755208,2.4 L15.5,2.4 L15.5,0.8 L10.5,0.8 L9.66666667,0 L6.33333333,0 Z M3.10416667,2.4 L12.8958333,2.4 L11.4358725,14.4 L4.5625,14.4 L3.10416667,2.4 Z">
		                              </path>
		                            </svg>
		                          </div> -->
									<div class="block--width-070">
										<!-- <input type="text" class="ant-input document-edit-block__input document-edit-block__textfield"
		                              placeholder="Add additional charges or discount" value="" /> -->
									</div>
									<div>
										<!-- <input type="text" class="ant-input document-edit-block__input document-edit-block__textfield"
		                              placeholder="" value="0.00" /> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<label class="document-edit-block__label">Invoice Total (Incoterms® 2020)
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<label class="document-edit-block__label2">Place and Date of Issue
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<label class="document-edit-block__label2">Signatory Company
								</label>
								<div class="document-edit-block--inline">
									<!-- <input type="text" class="ant-input document-edit-block__input document-edit-block__textfield"
		                            placeholder="Place of issue" value="" /> -->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<label class="document-edit-block__label2">Name of Authorized Signatory
								</label>
								<div class="document-edit-block--inline">
									<!-- <input type="text" class="ant-input document-edit-block__input document-edit-block__textfield"
		                            placeholder="First Name" value="" />
		                          <input type="text" class="ant-input document-edit-block__input document-edit-block__textfield"
		                            placeholder="Last Name" value="" /> -->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ant-row">
					<div class="document-layout__section">
						<div class="document-edit-block">
							<div class="document-edit-block__content">
								<label class="document-edit-block__label2">Signature
								</label>
								<div class="document-edit-block--inline">
									<!-- <textarea placeholder="Add Signature"
		                            class="ant-input document-edit-block__input document-edit-block__textfield"></textarea> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>`;
  };