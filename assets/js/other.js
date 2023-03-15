(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[6287], {
	52333:(e, t, s)=> {
		"use strict"; s.d(t, {
			M:()=>n

		}); var o=s(18404), i=s.n(o), r=s(11422), l=s(61187), a=s(68627); const n=({
		isShowing:e, date:t, onChangeDate:s, onRequestHide:o, ...n

	})=> {
	const[h, d]=r.useState(null); return(0, l.t)([h], (()=> {
				e&&o()

			})), r.useEffect((()=> {
				h&&$(h).DatePickerSetDate(t)

			}), [t]), r.useEffect((()=> {
				h&&$(h).DatePicker({
					inline: !0, date:t, current:t, calendars:1, mode:"single", onRenderCell:(e, t)=> {
						const s= {}

						; return t<new Date&&(s.disabled= !0, s.className="datepickerInvalidDate"), s
					}

					, onChange:s
				})

		}), [h]), r.createElement("div", {
	"aria-modal": !0, role:"dialog", "aria-label":a.t("js.choose_date"), ref:e=>d(e), className:i()("datepicker-calendar", "tooltip", {
		showing:e
	}), ...n
})
}
}

, 97911:(e, t, s)=> {
	"use strict"; s.d(t, {
		Z:()=>h

	}); var o=s(19662), i=s.n(o), r=s(82780), l=s(3937), a=s(69843), n=s(68627); const h=i()((function() {
			this.createPost=function(e, t) {
				(0, l.WY)({
					method:"POST", accept:"json", url:a.post_path(), formData: {
						post:t.post, link_id:t.permalink, should_send_preview:t.should_send_preview
					}

				}).then((e=> {
						if(e.ok) {
							const s= {
								...(0, r.pj)(e.responseJson(), [9, [5, [0, "success", [8,  !0]], [0, "post", [5, [0, "name", 0], [0, "message", 0], [0, "files", [6, [5, [0, "id", 0], [0, "url", 0], [0, "file_name", 0], [0, "description", [9, [8, null], 0]], [0, "extension", 0], [0, "file_size", [9, [8, null], 1]], [0, "pagelength", [9, [8, null], 1]], [0, "duration", [9, [8, null], 1]], [0, "is_streamable", 2], [0, "is_transcoding_in_progress", 2], [0, "attached_product_name", [9, [8, null], 0]], [0, "subtitle_files", [6, [5, [0, "url", 0], [0, "file_name", 0], [0, "extension", 0], [0, "language", 0], [0, "file_size", [9, [8, null], 1]], [0, "size", [9, [8, null], 0]]]]]]]], [0, "external_id", 0], [0, "is_draft", 2], [0, "published", 2], [0, "customer_count", [9, [8, null], 1]], [0, "stream_only", 2], [0, "streamable", 2], [0, "has_been_transcoded", 2], [0, "installment_type", [9, [8, "product"], [8, "audience"], [8, "seller"], [8, "variant"], [8, "follower"], [8, "affiliate"]]], [0, "call_to_action_text", [9, [8, null], 0]], [0, "call_to_action_url", [9, [8, null], 0]], [0, "pro", 2,  !0], [0, "shown_on_profile", 2], [0, "send_emails", 2], [0, "published_at", [9, [8, null], 0]], [0, "full_url", 0], [0, "bought_products", [6, 0],  !0], [0, "bought_variants", [6, 0],  !0], [0, "not_bought_products", 0,  !0], [0, "not_bought_variants", 0,  !0], [0, "created_after", 0,  !0], [0, "created_before", 0,  !0]]], [0, "publish_date", [9, [8, null], 0]], [0, "html", 0]], [5, [0, "success", [8,  !1]], [0, "error", 0]]]), should_publish_after_save:t.should_publish_after_save
							}

							; s.success?this.trigger("dataPostCreated", s):this.trigger("dataPostCreateFailed", s)
						}

					}), (()=>this.trigger("dataPostCreateFailed", {
						success: !1, error:n.t("js.error_placeholder")
					})))
	}

	, this.updatePost=function(e, t) {
		(0, l.WY)({
			method:"POST", accept:"json", url:a.update_post_path(t.id), formData: {
				post:t.post, link_id:t.permalink, should_send_preview:t.should_send_preview
			}

		}).then((e=> {
				if(e.ok) {
					const s= {
						...(0, r.pj)(e.responseJson(), [9, [5, [0, "success", [8,  !0]], [0, "post", [5, [0, "name", 0], [0, "message", 0], [0, "files", [6, [5, [0, "id", 0], [0, "url", 0], [0, "file_name", 0], [0, "description", [9, [8, null], 0]], [0, "extension", 0], [0, "file_size", [9, [8, null], 1]], [0, "pagelength", [9, [8, null], 1]], [0, "duration", [9, [8, null], 1]], [0, "is_streamable", 2], [0, "is_transcoding_in_progress", 2], [0, "attached_product_name", [9, [8, null], 0]], [0, "subtitle_files", [6, [5, [0, "url", 0], [0, "file_name", 0], [0, "extension", 0], [0, "language", 0], [0, "file_size", [9, [8, null], 1]], [0, "size", [9, [8, null], 0]]]]]]]], [0, "external_id", 0], [0, "is_draft", 2], [0, "published", 2], [0, "customer_count", [9, [8, null], 1]], [0, "stream_only", 2], [0, "streamable", 2], [0, "has_been_transcoded", 2], [0, "installment_type", [9, [8, "product"], [8, "audience"], [8, "seller"], [8, "variant"], [8, "follower"], [8, "affiliate"]]], [0, "call_to_action_text", [9, [8, null], 0]], [0, "call_to_action_url", [9, [8, null], 0]], [0, "pro", 2,  !0], [0, "shown_on_profile", 2], [0, "send_emails", 2], [0, "published_at", [9, [8, null], 0]], [0, "full_url", 0], [0, "bought_products", [6, 0],  !0], [0, "bought_variants", [6, 0],  !0], [0, "not_bought_products", 0,  !0], [0, "not_bought_variants", 0,  !0], [0, "created_after", 0,  !0], [0, "created_before", 0,  !0]]], [0, "publish_date", [9, [8, null], 0]], [0, "html", 0]], [5, [0, "success", [8,  !1]], [0, "error", 0]]]), should_publish_after_save:t.should_publish_after_save
					}

					; s.success?this.trigger("dataPostUpdated", s):this.trigger("dataPostFailedToUpdate", s)
				}

			}), (()=>this.trigger("dataPostFailedToUpdate", {
				success: !1, error:n.t("js.error_placeholder")
			})))
}

, this.publishPost=function(e, t) {
	(0, l.WY)({
		method:"POST", accept:"json", url:a.publish_post_path(t.id)

	}).then((e=> {
			if(e.ok) {
				const s= {
					...(0, r.pj)(e.responseJson(), [9, [5, [0, "success", [8,  !0]], [0, "post", [5, [0, "name", 0], [0, "message", 0], [0, "files", [6, [5, [0, "id", 0], [0, "url", 0], [0, "file_name", 0], [0, "description", [9, [8, null], 0]], [0, "extension", 0], [0, "file_size", [9, [8, null], 1]], [0, "pagelength", [9, [8, null], 1]], [0, "duration", [9, [8, null], 1]], [0, "is_streamable", 2], [0, "is_transcoding_in_progress", 2], [0, "attached_product_name", [9, [8, null], 0]], [0, "subtitle_files", [6, [5, [0, "url", 0], [0, "file_name", 0], [0, "extension", 0], [0, "language", 0], [0, "file_size", [9, [8, null], 1]], [0, "size", [9, [8, null], 0]]]]]]]], [0, "external_id", 0], [0, "is_draft", 2], [0, "published", 2], [0, "customer_count", [9, [8, null], 1]], [0, "stream_only", 2], [0, "streamable", 2], [0, "has_been_transcoded", 2], [0, "installment_type", [9, [8, "product"], [8, "audience"], [8, "seller"], [8, "variant"], [8, "follower"], [8, "affiliate"]]], [0, "call_to_action_text", [9, [8, null], 0]], [0, "call_to_action_url", [9, [8, null], 0]], [0, "pro", 2,  !0], [0, "shown_on_profile", 2], [0, "send_emails", 2], [0, "published_at", [9, [8, null], 0]], [0, "full_url", 0], [0, "bought_products", [6, 0],  !0], [0, "bought_variants", [6, 0],  !0], [0, "not_bought_products", 0,  !0], [0, "not_bought_variants", 0,  !0], [0, "created_after", 0,  !0], [0, "created_before", 0,  !0]]], [0, "publish_date", [9, [8, null], 0]], [0, "html", 0]], [5, [0, "success", [8,  !1]], [0, "error", 0]]]), should_publish_after_save:t.should_publish_after_save
				}

				; s.success?this.trigger("dataPostPublished", s):this.trigger("dataPostFailedToPublish", s)
			}

		}), (()=>this.trigger("dataPostFailedToPublish", {
			success: !1, error:n.t("js.error_placeholder")
		})))
}

, this.previewPostEmail=function(e, t) {
	(0, l.WY)({
		method:"POST", accept:"json", url:a.preview_post_path(t.id)

	}).then((e=> {
			if(e.ok) {
				(0, r.pj)(e.responseJson(), [5, [0, "success", 2]]).success&&this.trigger("dataPostPreviewed", {
					id:t.id
				})
		}

	}), (()=>this.trigger("uiShowFlashMessage", {
		message:n.t("js.error_placeholder"), status:"error"
	})))
}

, this.deletePost=function(e, t) {
	(0, l.WY)({
		method:"POST", accept:"json", url:a.delete_post_path(t.id)

	}).then((e=> {
			if(e.ok) {
				(0, r.pj)(e.responseJson(), [5, [0, "success", 2]]).success?this.trigger("dataPostDeleted", {
					id:t.id
				}):this.trigger("dataPostFailedToDelete")
		}
	}), (()=>this.trigger("dataPostFailedToDelete")))
}

, this.undoPostDelete=function(e, t) {
	(0, l.WY)({
		method:"POST", accept:"json", url:a.undo_post_delete_path(t.id)

	}).then((e=> {
			if(e.ok) {
				const t=(0, r.pj)(e.responseJson(), [9, [5, [0, "success", [8,  !0]], [0, "post", [5, [0, "name", 0], [0, "message", 0], [0, "files", [6, [5, [0, "id", 0], [0, "url", 0], [0, "file_name", 0], [0, "description", [9, [8, null], 0]], [0, "extension", 0], [0, "file_size", [9, [8, null], 1]], [0, "pagelength", [9, [8, null], 1]], [0, "duration", [9, [8, null], 1]], [0, "is_streamable", 2], [0, "is_transcoding_in_progress", 2], [0, "attached_product_name", [9, [8, null], 0]], [0, "subtitle_files", [6, [5, [0, "url", 0], [0, "file_name", 0], [0, "extension", 0], [0, "language", 0], [0, "file_size", [9, [8, null], 1]], [0, "size", [9, [8, null], 0]]]]]]]], [0, "external_id", 0], [0, "is_draft", 2], [0, "published", 2], [0, "customer_count", [9, [8, null], 1]], [0, "stream_only", 2], [0, "streamable", 2], [0, "has_been_transcoded", 2], [0, "installment_type", [9, [8, "product"], [8, "audience"], [8, "seller"], [8, "variant"], [8, "follower"], [8, "affiliate"]]], [0, "call_to_action_text", [9, [8, null], 0]], [0, "call_to_action_url", [9, [8, null], 0]], [0, "pro", 2,  !0], [0, "shown_on_profile", 2], [0, "send_emails", 2], [0, "published_at", [9, [8, null], 0]], [0, "full_url", 0], [0, "bought_products", [6, 0],  !0], [0, "bought_variants", [6, 0],  !0], [0, "not_bought_products", 0,  !0], [0, "not_bought_variants", 0,  !0], [0, "created_after", 0,  !0], [0, "created_before", 0,  !0]]], [0, "publish_date", [9, [8, null], 0]], [0, "html", 0]], [5, [0, "success", [8,  !1]], [0, "error", 0]]]); t.success?this.trigger("dataPostDeleteUndone", t):this.trigger("dataPostDeleteFailedToUndo")
			}
		}), (()=>this.trigger("dataPostDeleteFailedToUndo")))
}

, this.createAndSchedulePost=function(e, t) {
	(0, l.WY)({
		method:"POST", accept:"json", url:a.create_and_schedule_post_path(), formData: {
			post:t.post, link_id:t.permalink, to_be_published_at:t.to_be_published_at
		}

	}).then((e=> {
			if(e.ok) {
				const t=(0, r.pj)(e.responseJson(), [9, [5, [0, "success", [8,  !0]], [0, "post", [5, [0, "name", 0], [0, "message", 0], [0, "files", [6, [5, [0, "id", 0], [0, "url", 0], [0, "file_name", 0], [0, "description", [9, [8, null], 0]], [0, "extension", 0], [0, "file_size", [9, [8, null], 1]], [0, "pagelength", [9, [8, null], 1]], [0, "duration", [9, [8, null], 1]], [0, "is_streamable", 2], [0, "is_transcoding_in_progress", 2], [0, "attached_product_name", [9, [8, null], 0]], [0, "subtitle_files", [6, [5, [0, "url", 0], [0, "file_name", 0], [0, "extension", 0], [0, "language", 0], [0, "file_size", [9, [8, null], 1]], [0, "size", [9, [8, null], 0]]]]]]]], [0, "external_id", 0], [0, "is_draft", 2], [0, "published", 2], [0, "customer_count", [9, [8, null], 1]], [0, "stream_only", 2], [0, "streamable", 2], [0, "has_been_transcoded", 2], [0, "installment_type", [9, [8, "product"], [8, "audience"], [8, "seller"], [8, "variant"], [8, "follower"], [8, "affiliate"]]], [0, "call_to_action_text", [9, [8, null], 0]], [0, "call_to_action_url", [9, [8, null], 0]], [0, "pro", 2,  !0], [0, "shown_on_profile", 2], [0, "send_emails", 2], [0, "published_at", [9, [8, null], 0]], [0, "full_url", 0], [0, "bought_products", [6, 0],  !0], [0, "bought_variants", [6, 0],  !0], [0, "not_bought_products", 0,  !0], [0, "not_bought_variants", 0,  !0], [0, "created_after", 0,  !0], [0, "created_before", 0,  !0]]], [0, "publish_date", [9, [8, null], 0]], [0, "html", 0]], [5, [0, "success", [8,  !1]], [0, "error", 0]]]); t.success?this.trigger("dataPostCreatedAndScheduled", t):this.trigger("dataPostFailedToSchedule", t)
			}

		}), (()=>this.trigger("dataPostFailedToSchedule", {
			success: !1, error:n.t("js.error_placeholder")
		})))
}

, this.updateAndSchedulePost=function(e, t) {
	(0, l.WY)({
		method:"POST", accept:"json", url:a.schedule_post_path(t.id), formData: {
			post:t.post, link_id:t.permalink, to_be_published_at:t.to_be_published_at
		}

	}).then((e=> {
			if(e.ok) {
				const t=(0, r.pj)(e.responseJson(), [9, [5, [0, "success", [8,  !0]], [0, "post", [5, [0, "name", 0], [0, "message", 0], [0, "files", [6, [5, [0, "id", 0], [0, "url", 0], [0, "file_name", 0], [0, "description", [9, [8, null], 0]], [0, "extension", 0], [0, "file_size", [9, [8, null], 1]], [0, "pagelength", [9, [8, null], 1]], [0, "duration", [9, [8, null], 1]], [0, "is_streamable", 2], [0, "is_transcoding_in_progress", 2], [0, "attached_product_name", [9, [8, null], 0]], [0, "subtitle_files", [6, [5, [0, "url", 0], [0, "file_name", 0], [0, "extension", 0], [0, "language", 0], [0, "file_size", [9, [8, null], 1]], [0, "size", [9, [8, null], 0]]]]]]]], [0, "external_id", 0], [0, "is_draft", 2], [0, "published", 2], [0, "customer_count", [9, [8, null], 1]], [0, "stream_only", 2], [0, "streamable", 2], [0, "has_been_transcoded", 2], [0, "installment_type", [9, [8, "product"], [8, "audience"], [8, "seller"], [8, "variant"], [8, "follower"], [8, "affiliate"]]], [0, "call_to_action_text", [9, [8, null], 0]], [0, "call_to_action_url", [9, [8, null], 0]], [0, "pro", 2,  !0], [0, "shown_on_profile", 2], [0, "send_emails", 2], [0, "published_at", [9, [8, null], 0]], [0, "full_url", 0], [0, "bought_products", [6, 0],  !0], [0, "bought_variants", [6, 0],  !0], [0, "not_bought_products", 0,  !0], [0, "not_bought_variants", 0,  !0], [0, "created_after", 0,  !0], [0, "created_before", 0,  !0]]], [0, "publish_date", [9, [8, null], 0]], [0, "html", 0]], [5, [0, "success", [8,  !1]], [0, "error", 0]]]); t.success?this.trigger("dataPostCreatedAndScheduled", t):this.trigger("dataPostFailedToSchedule", t)
			}

		}), (()=>this.trigger("dataPostFailedToSchedule", {
			success: !1, error:n.t("js.error_placeholder")
		})))
}

, this.getRecipientCount=function(e, t) {
	(0, l.WY)({
		method:"GET", accept:"json", url:a.post_updated_recipient_count_path(), formData:t

	}).then((e=> {
			if(e.ok) {
				const t=(0, r.pj)(e.responseJson(), [5, [0, "success", [8,  !0]], [0, "recipient_count", 1]]); this.trigger("dataUpdatedRecipientCount", t)
			}

		}), (()=>this.trigger("uiShowFlashMessage", {
			message:n.t("js.error_placeholder"), status:"error"
		})))
}

, this.loadMorePosts=function(e, t) {
	const s=t.currentPage+1; (0, l.WY)({
		method:"GET", accept:"json", url:a.all_posts_paginated_path(), formData: {
			page:s, type:t.type
		}

	}).then((e=> {
			if(e.ok) {
				const o=(0, r.pj)(e.responseJson(), [5, [0, "html", 0], [0, "can_paginate_further", 2]]); this.trigger("dataMorePostsLoaded", {
					page:s, postsHtml:o.html, showLoadMorePosts:o.can_paginate_further, type:t.type
				})
		}

		else this.trigger("dataLoadMorePostsFailed")
	}), (()=>this.trigger("dataLoadMorePostsFailed")))
}

, this.searchPosts=function(e, t) {
	(0, l.WY)({
		method:"GET", accept:"json", url:a.posts_search_path(t)

	}).then((e=> {
			if(e.ok) {
				const s=(0, r.pj)(e.responseJson(), [5, [0, "html", 0], [0, "can_paginate_further", 2]]); this.trigger("dataPostsSearchResult", {
					page:t.page, postsHtml:s.html, showLoadMorePosts:s.can_paginate_further, type:t.type
				})
		}

		else this.trigger("uiNeedsToShowPostsSearchError")
	}), (()=>this.trigger("uiNeedsToShowPostsSearchError")))
}

, this.after("initialize", (function() {
			this.on("uiNeedsToUpdatePost", this.updatePost), this.on("uiNeedsToCreatePost", this.createPost), this.on("uiNeedsToDeletePost", this.deletePost), this.on("uiNeedsToPublishPost", this.publishPost), this.on("uiNeedsToUndoPostDelete", this.undoPostDelete), this.on("uiNeedsToSendPreviewPostEmail", this.previewPostEmail), this.on("uiNeedsToCreateAndSchedulePost", this.createAndSchedulePost), this.on("uiNeedsToUpdateAndSchedulePost", this.updateAndSchedulePost), this.on("uiNeedsToUpdateRecipientCount", this.getRecipientCount), this.on("uiNeedsToLoadMorePosts", this.loadMorePosts), this.on("uiNeedsToSearchPosts", this.searchPosts)
		}))
}))
}

, 61235:(e, t, s)=> {
	"use strict"; var o=s(38288), i=s.n(o), r=s(97911), l=s(50136), a=s(19662), n=s.n(a); const h=function() {
		this.formattedStatNumber=e=> {
			var t; return null !=(t=null==e?void 0:e.toLocaleString())?t:"--"
		}

		, this.formattedStatNumberAndPercentage=(e, t)=>null===t?"--":`${e.toLocaleString()} (${t.toLocaleString()}%)`
	}

	; var d=s(68627), c=s(69843); const u=n()((function() {
				this.defaultAttrs({
					postTableSelector:".js-posts-table", showDraftsTabTriggerSelector:".js-show-drafts-tab-trigger", postListSelector:".js-posts-list", publishedListSelector:".js-published-list", scheduledListSelector:".js-scheduled-list", scheduledPostsContainerSelector:".js-posts-container[data-type=scheduled]", draftListSelector:".js-draft-list", postRowSelector:".js-post-row", editButtonSelector:".js-post-edit-trigger", duplicateButtonSelector:".js-post-duplicate-trigger", deleteButtonSelector:".js-post-delete-trigger", viewEmailPostTriggerSelector:".js-view-email-post-trigger", viewPostPostTriggerSelector:".js-view-post-trigger", undoContainer:".js-undo-container", undoButtonSelector:".js-undo-delete-trigger", undoMessageSelector:".js-undo-message", loadMorePostsTriggerSelector:".js-load-more-posts-trigger", searchQueryInputSelector:".js-search-posts-input", postSidebarSelector:".js-post-sidebar", postSidebarViewActionsSelector:".js-post-sidebar-view-actions", closePostSidebarTriggerSelector:".js-close-post-sidebar", currentPage:1, morePostsLoading: !1

				}), this.rerenderPost=function(e, t) {
				const s=this.select("postListSelector").find(`${this.attr.postRowSelector}[data-id="${t.post.external_id}"]`); t.should_publish_after_save?(this.addNewSentPostToList(e, t), s.remove()):s.replaceWith(t.html)
			}

			, this.removePost=function(e) {
				const t=this.select("postListSelector").find(`${this.attr.postRowSelector}[data-id="${e}"]`), s=t.closest(this.attr.scheduledListSelector); t.remove(), 0===s.find(this.attr.postRowSelector).length&&s.closest(this.attr.postTableSelector).remove()
			}

			, this.postDeleted=function(e, t) {
				this.removePost(t.id), this.select("undoButtonSelector").show(), this.select("undoContainer").show(), "published"===this.attr.listState?this.select("undoMessageSelector").html(d.t("js.update_deleted_notice")):(this.attr.listState, this.select("undoMessageSelector").html(d.t("js.draft_deleted_notice"))), this.trigger(document, "uiNeedsToToggleEmptyState", {
					type:this.attr.listState
				}), this.attr.lastDeletedId=t.id
		}

		, this.postPreviewed=function() {
			this.trigger("uiShowFlashMessage", {
				message:d.t("js.preview_sent_to_creator_message"), status:"success"
			})
	}

	, this.showPostError=function(e, t) {
		this.trigger("uiShowFlashMessage", {
			message:t.error, status:"error"
		})
}

, this.addNewScheduledPostToList=function(e, t) {
	this.removePost(t.post.external_id); const s=this.select("scheduledPostsContainerSelector"); if(s.length>0) {
		const e=this.select("scheduledListSelector").filter(`[data-publish-date="${t.publish_date}"]`); if(e.length>0)e.prepend(t.html); else {
			const e=document.getElementById("posts-table-template").content.cloneNode( !0), o=e.querySelector("tbody.js-scheduled-list"); o.dataset.publishDate=t.publish_date, o.innerHTML=t.html, e.querySelector(".js-posts-table caption").textContent=d.t("js.scheduled_for", {
				date:t.publish_date
			}), s.prepend(e)
	}
}

else if(this.select("scheduledListSelector").length>0)this.select("scheduledListSelector").prepend(t.html); else {
	const e=document.getElementById("generic-posts-table-template").content.cloneNode( !0); e.querySelector("tbody.js-scheduled-list").innerHTML=t.html, this.select("undoContainer").after(e)
}
}

, this.addNewScheduledPostToListAndShowPostScheduled=function(e, t) {
	this.addNewScheduledPostToList(e, t), this.trigger("uiToShowPostScheduled")
}

, this.addNewSentPostToList=function(e, t) {
	this.select("publishedListSelector").prepend(t.html)
}

, this.addNewDraftPostToList=function(e, t) {
	this.select("draftListSelector").prepend(t.html)
}

, this.addNewUndonePostToList=function(e, t) {
	"published"===this.attr.listState?this.addNewSentPostToList(e, t):"draft"===this.attr.listState?this.addNewDraftPostToList(e, t):this.addNewScheduledPostToList(e, t), this.trigger(document, "uiNeedsToToggleEmptyState", {
		type:this.attr.listState
	})
}

, this.addNewSavedPostToList=function(e, t) {
	t.should_publish_after_save?this.addNewSentPostToList(e, t):this.select("showDraftsTabTriggerSelector").length>0&& !t.should_publish_after_save?this.addNewDraftPostToList(e, t):this.addNewScheduledPostToList(e, t)
}

, this.editPost=function(e) {
	e.preventDefault(), this.select("postSidebarSelector").hide(), this.trigger("uiNeedsToUpdatePostForm", $(e.currentTarget).data())
}

, this.deletePost=function(e) {
	e.preventDefault(); const t=$(e.currentTarget); t.text(d.t("js.deleting")), this.select("postSidebarSelector").hide(), this.trigger("uiNeedsToDeletePost", {
		id:t.data("id")
	})
}

, this.duplicatePost=function(e) {
	e.preventDefault(), this.select("postSidebarSelector").hide(), this.trigger("uiNeedsToDuplicatePostForm", $(e.currentTarget).data())
}

, this.sendPreview=function(e) {
	e.preventDefault(), this.trigger("uiNeedsToSendPreviewPostEmail", {
		id:$(e.target||e.srcElement).data("id")
	})
}

, this.undoDelete=function(e) {
	e.preventDefault(), this.select("undoButtonSelector").text(d.t("js.undoing")), this.trigger("uiNeedsToUndoPostDelete", {
		id:this.attr.lastDeletedId
	})
}

, this.resetUndoContainer=function() {
	this.select("undoContainer").hide(), this.select("undoButtonSelector").text(d.t("js.undo"))
}

, this.setLoadingMorePostsState=function() {
	const e=this.select("loadMorePostsTriggerSelector"), t=e.data("loading-text"); e.text(t), this.attr.morePostsLoading= !0
}

, this.setLoadingMorePostsCompletedState=function() {
	const e=this.select("loadMorePostsTriggerSelector"), t=e.data("text"); e.text(t), this.attr.morePostsLoading= !1
}

, this.loadMorePosts=function(e) {
	if(e.preventDefault(),  !this.attr.morePostsLoading) {
		this.setLoadingMorePostsState(); const e= {
			currentPage:this.attr.currentPage, type:this.attr.listState
		}

		; this.select("searchQueryInputSelector").val().length>0?this.trigger("uiNeedsToPerformSearchPosts"):this.trigger("uiNeedsToLoadMorePosts", e)
	}
}

, this.morePostsLoaded=function(e, t) {
	if("scheduled"===this.attr.listState&&this.select("scheduledPostsContainerSelector").length>0) {
		const s=document.createElement("tbody"); s.innerHTML=t.postsHtml, s.querySelectorAll(".js-post-row").forEach((t=> {
					const s=t.querySelector("button.js-post-duplicate-trigger").dataset.post; this.addNewScheduledPostToList(e, {
						html:t.outerHTML, post:s, publish_date:t.dataset.publishDate
					})
			}))
}

else this.select(`${this.attr.listState}ListSelector`).append(t.postsHtml); this.attr.currentPage=t.page, this.setLoadingMorePostsCompletedState(), this.select("loadMorePostsTriggerSelector").filter(`[data-type="${t.type}"]`).toggleClass("hidden",  !t.showLoadMorePosts).toggle(t.showLoadMorePosts)
}

, this.loadMorePostsFailed=function() {
	this.trigger("uiShowFlashMessage", {
		message:d.t("js.something_went_wrong"), status:"error"
	}), this.setLoadingMorePostsCompletedState()
}

; const e= {
	uiNeedsToSetScheduledTabState:"scheduled", uiNeedsToSetSentTabState:"published", uiNeedsToSetDraftTabState:"draft"
}

; this.setListState=function(t) {
	this.attr.listState=e[t.type]
}

, this.showSearchedPosts=function(e, t) {
	this.addPosts(t)
}

, this.removePosts=function() {
	this.select(`${this.attr.listState}ListSelector`).find(this.attr.postRowSelector).remove(); const e=this.select("scheduledPostsContainerSelector"); "scheduled"===this.attr.listState&&e.length>0&&e.find(this.attr.postTableSelector).remove()
}

, this.addPosts=function(e) {
	this.trigger("uiNeedsToResetPosts"), this.trigger("dataMorePostsLoaded", e), 0===this.select("postRowSelector").filter(":visible").length&&this.trigger("uiNeedsToShowPostsEmpty")
}

, this.showPostSidebar=function(e) {
	const t=$(e.currentTarget), s=this.select("postSidebarSelector"), o=t.data(); if("published"===o.type&&s.length>0) {
		const e=t.find("td:first-child").text(); s.find("h2").html(e); const i=new Date(o.post.published_at).toLocaleString(); s.find(".stack").html(`\n <li><h5>${d.t("js.sent")}</h5>${i}</li>\n <li>\n <h5>${d.t("js.posts_page.posts_heading_emailed")}</h5>\n ${this.formattedStatNumber(o.post.customer_count)}\n </li>\n <li>\n <h5>${d.t("js.posts_page.posts_heading_opened")}</h5>\n ${this.formattedStatNumberAndPercentage(o.post.open_rate_count,o.post.open_rate_percentage)}\n </li>\n <li>\n <h5>${d.t("js.posts_page.posts_heading_clicked")}</h5>\n ${this.formattedStatNumberAndPercentage(o.post.click_rate_count,o.post.click_rate_percentage)}\n </li>\n <li>\n <h5>${d.t("js.posts_page.posts_heading_views")}</h5>\n ${this.formattedStatNumber(o.post.views_count)}\n </li>\n `); const r=s.find(this.attr.postSidebarViewActionsSelector); r.empty(), Object.prototype.hasOwnProperty.call(o, "sendEmails")&&r.append(`<button class="js-view-email-post-trigger" style="width: 100%" data-id="${o.id}" >\n <span class="icon icon-envelope-fill" ></span>\n ${d.t("js.view_email")}\n </button>`), Object.prototype.hasOwnProperty.call(o, "shownOnProfile")&&r.append(`<a href="${c.view_post_path(o.username,o.slug)}" class="button" style="width: 100%" target="_blank" rel="noopener noreferrer" >\n <span class="icon icon-file-earmark-medical-fill" ></span>\n ${d.t("js.view_post")}\n </a>`), s.find(this.attr.duplicateButtonSelector).data("post", o.post), s.find(this.attr.editButtonSelector).data("post", o.post).data("timezone", o.timezone), s.find(this.attr.deleteButtonSelector).data("id", o.id).text(d.t("js.delete")), s.show()
	}
}

, this.hidePostSidebar=function(e) {
	if( !this.select("postSidebarSelector").filter(":visible").length)return; const t=$(e.target); t.closest(this.attr.postRowSelector).length||t.hasClass("js-post-sidebar")|| !t.hasClass("js-close-post-sidebar")&&t.closest(this.attr.postSidebarSelector).length||this.select("postSidebarSelector").hide()
}

, this.after("initialize", (function() {
			this.on(document, "uiNeedsToRenderPublishedPost", this.rerenderPost), this.on(document, "dataPostDeleted", this.postDeleted), this.on(document, "dataPostPreviewed", this.postPreviewed), this.on(document, "dataPostFailedToPost", this.showPostError), this.on(document, "dataPostCreated", this.addNewSavedPostToList), this.on(document, "dataPostUpdated", this.rerenderPost), this.on(document, "dataPostCreatedAndScheduled", this.addNewScheduledPostToListAndShowPostScheduled), this.on(document, "dataPostUpdatedAndScheduled", this.rerenderPost), this.on(document, "dataPostDeleteUndone", this.addNewUndonePostToList), this.on(document, "dataPostDeleteUndone", this.resetUndoContainer), this.on(document, "dataMorePostsLoaded", this.morePostsLoaded), this.on(document, "dataLoadMorePostsFailed", this.loadMorePostsFailed), this.on(document, "uiNeedsToSetSentTabState", this.setListState), this.on(document, "uiNeedsToSetScheduledTabState", this.setListState), this.on(document, "uiNeedsToSetDraftTabState", this.setListState), this.on("click", {
				duplicateButtonSelector:this.duplicatePost, editButtonSelector:this.editPost, deleteButtonSelector:this.deletePost, viewEmailPostTriggerSelector:this.sendPreview, undoButtonSelector:this.undoDelete, loadMorePostsTriggerSelector:this.loadMorePosts, postRowSelector:this.showPostSidebar
			}), this.on(document, "click", this.hidePostSidebar), this.on(document, "dataPostsSearchResult", this.showSearchedPosts), this.on(document, "uiNeedsToShowPostsLoading", this.setLoadingMorePostsState), this.on(document, "uiNeedsToRemovePosts", this.removePosts)
	}))

}), h); var p=s(82669), g=s.n(p), m=s(48237), P=s.n(m), S=s(84189), f=s.n(S), b=s(62110), w=s(37738), _=s(1738), v=s(96977), T=s(42494), j=s(22208), N=s(74233), y=s(68627); const D=n()((function() {
			this.defaultAttrs({
				postsEmptyPlaceholderSelector:".js-posts-empty-placeholder", publishPostButtonSelector:".js-publish-post-trigger", publishPostLaterButtonSelector:".js-schedule-post-trigger", cancelPublishButtonSelector:".js-cancel-publish-post-trigger", postNameSelector:".js-post-name", newEditPostContainer:".js-new-edit-post-container", postOptionsSelector:".js-new-post-header", publishedListHolderSelector:".js-published-list-holder", scheduledListHolderSelector:".js-scheduled-list-holder", draftListHolderSelector:".js-draft-list-holder", schedulePostSelector:".js-schedule-post-box", postRowSelector:".js-post-row", postsTableSelector:".js-posts-table", postFormHeaderSelector:".js-new-post-form-header", postFormHolderSelector:".js-post-form-inputs-holder", postProgressHolderSelector:".js-post-progress-holder", streamingOnlyNoticeSelector:".js-streaming-only-notice", streamingOnlyCheckboxSelector:".js-stream-only", delayedPostPromptSelector:".js-delayed-post-prompt", releaseDateSelector:".js-schedule-post-input-date", publishDateSelector:".js-edit-post-input-date", publishAtSelector:".js-schedule-post-publish-at", datePickerPopoverSelector:".js-datepicker-calendar-popover", datePickerSelector:".js-datepicker-calendar", addCallToActionButtonSelector:".js-add-call-to-action-button", callToActionButtonInputsHolder:".js-call-to-action-inputs-holder", callToActionTextSelector:".js-call-to-action-text", callToActionUrlSelector:".js-call-to-action-url", filterBoxSelector:".js-initial-filter-box", schedulePostButtonSelector:".js-schedule-post-modal-trigger", addFilesTriggerSelector:".js-add-files-trigger", formSelector:".js-create-post-form", productFileInputSelector:".js-post-file", fileListSelector:".js-file-list", disableWithExemptionsClass:"disable-with-exemptions", isFileReorderAllowed: !0, createPostEvent:"uiNeedsToCreatePost", updatePostEvent:"uiNeedsToUpdatePost", createAndSchedulePostEvent:"uiNeedsToCreateAndSchedulePost", updateAndSchedulePostEvent:"uiNeedsToUpdateAndSchedulePost"

			}), this.hidePostAndShowList=function(e) {
			e||(e=this.select("postRowSelector").filter("[data-type=scheduled]").length>0?"scheduled":"published"), "scheduled"===e?$(document).trigger("uiNeedsToShowScheduledTab"):"draft"===e?$(document).trigger("uiNeedsToShowDraftTab"):"published"===e&&$(document).trigger("uiNeedsToShowPublishedTab"), this.select("newEditPostContainer").hide()
		}

		, this.toggleEmptyState=function(e, t) {
			const s=0===this.select("postRowSelector").filter(`[data-type=${t.type}]`).length; this.$node.toggleClass("empty", s), this.select(`${t.type}ListHolderSelector`).find(this.attr.postsTableSelector).toggle( !s), this.$node.find(`${this.attr.postsEmptyPlaceholderSelector}[data-type=${t.type}]`).toggle(s)
		}

		, this.newFollowerPost=function(e) {
			this.newPost(e), this.select("recipientFollowersRadio").prop("checked",  !0)
		}

		, this.validatePostForm=function() {
			return this.validateFilters()&&this.validateForm(this.select("postFormHolderSelector"))
		}

		, this.getPostValuesHash=function() {
			if( !this.validatePostForm())return !1; let e= {
				name:this.select("postNameSelector").val(), message:this.attr.descriptionRef.getEditorHTML(), removedImageUrls:this.attr.descriptionRef.getRemovedImageUrls(), files:this.getFiles(), streamOnly:this.select("streamingOnlyCheckboxSelector").prop("checked"), callToActionText:this.select("callToActionTextSelector").val(), callToActionUrl:this.select("callToActionUrlSelector").val()
			}

			; return e= {
				...e, ...this.getFiltersHash()
			}

			, this.attr.creatingPost?e: {
				...e, id:this.attr.post.external_id
			}
		}

		, this.disablePostButtons=function() {
			this.trigger("uiNeedsToDisableSaveButton", {
				all_buttons: !0
			})
	}

	, this.enablePostButtons=function() {
		this.trigger("uiNeedsToEnableSaveButton", {
			all_buttons: !0
		})
}

, this.showStreamOnlyOption=function() {
	this.select("streamingOnlyCheckboxSelector").length||this.select("streamingOnlyNoticeSelector").append(f()(this.attr.post? {
				stream_only:this.attr.post.stream_only
			}

			: {}))
}

, this.attachPublishDropdownMenu=function() {
	var e, t; this.select("publishPostButtonSelector").data("id", null==(e=this.attr.post)?void 0:e.external_id), this.select("publishPostLaterButtonSelector").data("id", null==(t=this.attr.post)?void 0:t.external_id), this.select("schedulePostSelector").show()
}

, this.editPost=function(e, t) {
	const s=new Date; if(s.setDate(s.getDate()), this.attr.creatingPost= !1, this.attr.post=t.post, this.attr.timezone=t.timezone, this.setFiltersForPosts(this.attr.post), this.schedulePostRecipientCount(), this.trigger(document, "uiNeedsToReplacePostsNav", {
			html:g()()

		}), this.attachPublishDropdownMenu(), this.select("postFormHeaderSelector").find("h1").text(y.t("js.edit_post")), this.select("delayedInstallmentPromptSelector").html(y.t("js.delayed_installment_prompt", {
			timezone:this.attr.timezone

		})), this.select("postFormHolderSelector").html(P()($.extend(this.attr.post, {
			username:this.select("formSelector").data("username")

		}))), this.attr.post.call_to_action_text||this.select("callToActionButtonInputsHolder").hide(), this.attr.post.published) {
	const e=new Date(this.attr.post.published_at); this.select("publishDateSelector").val(this.formattedDateForTextInput(e))
}

this.setEditor(), this.setupFiles(this.attr.post.files), this.attr.post.streamable&&this.showStreamOnlyOption(), t.post.published?(this.attr.editingPublishedPost= !0, this.trigger("uiNeedsToHideSchedulePostButton"), this.select("filterBoxSelector").addClass(this.attr.disableWithExemptionsClass)):this.select("filterBoxSelector").removeClass(this.attr.disableWithExemptionsClass), this.toggleFiltersDisabledState(t.post.published), this.select("scheduledListHolderSelector").hide(), this.select("publishedListHolderSelector").hide(), this.select("draftListHolderSelector").hide(), this.select("newEditPostContainer").show(), this.resetSaveAndScheduleButtons(), this.$node.removeClass("empty")
}

, this.newPost=function(e, t) {
	var s; const o=this.select("scheduledListHolderSelector"); if(o.data("post"))return this.editPost(e, o.data()), this.attr.creatingPost= !0, void o.data("post", null); if(this.attr.creatingPost= !0, this.attr.post=t&&t.post?t.post:null, this.attr.timezone=o.data("timezone"), this.attr.removeGumroadEmailBranding=o.data("remove-gumroad-email-branding"), this.trigger(document, "uiNeedsToReplacePostsNav", {
			html:g()()

		}), this.attachPublishDropdownMenu(), this.select("postFormHeaderSelector").find("h1").text(y.t("js.new_update")), this.select("delayedInstallmentPromptSelector").html(y.t("js.delayed_installment_prompt", {
			timezone:this.attr.timezone

		})), this.attr.post)this.setFiltersForPosts(this.attr.post), this.schedulePostRecipientCount(), this.attachPublishDropdownMenu(), this.select("postFormHolderSelector").html(P()($.extend(this.attr.post, {
			username:this.select("formSelector").data("username")

		}))); else {
	const e=window.location.hash.substr(10).split("&").reduce(((e, t)=> {
				const s=t.split("="); return e[s[0]]=s[1], e

			}), {}); e.tier?this.setFiltersForPosts({
	installment_type:"variant", variant_external_id:decodeURIComponent(e.tier), shown_on_profile: !0

}):this.trigger("uiNeedsToResetFilters"), this.select("postFormHolderSelector").html(P()({
		name:"", message:"", username:this.select("formSelector").data("username"), removeGumroadEmailBranding:this.attr.removeGumroadEmailBranding
	}))
}

(null==(s=this.attr.post)?void 0:s.call_to_action_text)||this.select("callToActionButtonInputsHolder").hide(), this.select("filterBoxSelector").removeClass(this.attr.disableWithExemptionsClass), this.toggleFiltersDisabledState( !1), this.select("scheduledListHolderSelector").hide(), this.select("publishedListHolderSelector").hide(), this.select("draftListHolderSelector").hide(), this.select("newEditPostContainer").show(), this.select("filterBoxSelector").removeClass("disabled"), this.setEditor(), this.resetSaveAndScheduleButtons(), this.removeErrorClass(), this.$node.removeClass("empty")
}

, this.cancelPost=function(e) {
	return e.preventDefault(), this.hidePostAndShowList(), this.resetSaveAndScheduleButtons(), this.removeErrorClass(), this.resetParams(), this.trigger(document, "uiNeedsToRevertPostsNav"),  !1
}

, this.savePost=function(e) {
	e.preventDefault(), this.trigger("uiNeedsToPostSaveButtonCopy", {
		text:y.t("js.saving")

	}), this.trigger("uiNeedsToDisableSaveButton"); const t=this.getPostValuesHash(); if( !t)return this.resetSaveAndScheduleButtons(),  !1; if(this.attr.creatingPost)this.trigger("uiGetFilesAndCreatePost", {
	...t, postEvent:this.attr.createPostEvent, shouldSendPreview:this.attr.shouldSendPreview, shouldPublishAfterSave:this.attr.publishAfterSave

}); else {
	const e=this.select("publishDateSelector").val(); let s=null; e !==this.formattedDateForTextInput(new Date(this.attr.post.published_at))&&(s=e), this.trigger("uiGetFilesAndUpdatePost", {
		...t, publishedAt:s, id:this.attr.post.external_id, postEvent:this.attr.updatePostEvent, shouldSendPreview:this.attr.shouldSendPreview, shouldPublishAfterSave:this.attr.publishAfterSave
	})
}

return !1
}

, this.previewPostEmail=function(e) {
	e.preventDefault(), this.validatePostForm()&&(this.attr.shouldSendPreview= !0, this.savePost(e))
}

, this.previewPost=function(e) {
	e.preventDefault(), this.validatePostForm()&&(this.attr.shouldOpenPreviewLink= !0, this.savePost(e))
}

, this.postUpdated=function(e, t) {
	this.resetSaveAndScheduleButtons(), this.attr.post=t.post, this.attr.creatingPost= !1, this.reRenderFiles(t.post.files), this.actionAfterPostUpdated()
}

, this.actionAfterPostUpdated=function() {
	this.attr.shouldSendPreview?(this.attr.shouldSendPreview= !1, this.trigger("uiShowFlashMessage", {
			message:y.t("js.preview_sent_to_creator_message"), status:"success"

		})):this.attr.shouldOpenPreviewLink?(this.attr.shouldOpenPreviewLink= !1, this.trigger("uiShowFlashMessage", {
		message:y.t("js.preview_opened"), status:"success"

	}), window.open(this.attr.post.full_url, "_blank")):this.attr.publishAfterSave?(this.attr.publishAfterSave= !1, this.publishPost()):this.trigger("uiShowFlashMessage", {
	message:y.t("js.changes_saved"), status:"success"
}), this.attr.descriptionRef.resetRemovedImageUrls()
}

, this.disablePublishingButtons=function() {
	this.select("publishPostButtonSelector").prop("disabled",  !0), this.select("publishPostLaterButtonSelector").prop("disabled",  !0)
}

, this.enablePublishingButtons=function() {
	this.select("publishPostLaterButtonSelector").removeProp("disabled"), this.select("publishPostButtonSelector").removeProp("disabled")
}

, this.setPublishingFlagAndSavePost=function(e) {
	return e.preventDefault(), this.attr.publishAfterSave= !0, this.disablePublishingButtons(), this.savePost(e),  !1
}

, this.publishPost=function() {
	this.select("cancelPublishButtonSelector").show(), this.select("publishPostButtonSelector").addClass("show-cancel"), this.disablePublishingButtons(), this.attr.sendCountdown=new N.Z(5, (e=> {
				const t=this.attr.post.shown_on_profile?y.t("js.publishing_prefix"):y.t("js.sending_prefix"); this.select("publishPostButtonSelector").text(y.t("js.sending_with_time", {
						sending_or_publishing:t, seconds:e
					}))

		}), (()=> {
			this.trigger("uiNeedsToPublishPost", {
				id:this.attr.post.external_id, shouldPublishAfterSave: !0
			}), this.select("publishPostButtonSelector").text(y.t("js.sending")), this.select("publishPostButtonSelector").removeClass("show-cancel"), this.select("cancelPublishButtonSelector").hide(), this.trigger(document, "uiNeedsToRevertPostsNav")
	}))
}

, this.cancelPublishPost=function(e) {
	return e.preventDefault(), this.attr.sendCountdown.abort(), this.select("publishPostButtonSelector").text(y.t("js.send_now")), this.select("cancelPublishButtonSelector").hide(), this.trigger("uiNeedsToShowSchedulePostButton"), this.enablePublishingButtons(), this.select("publishPostButtonSelector").removeClass("show-cancel"),  !1
}

, this.showPostPublished=function(e, t) {
	return e.preventDefault(), this.trigger("uiNeedsToRenderPublishedPost", t), this.trigger("uiShowFlashMessage", {
		message:y.t("js.update_published"), status:"success"
	}), this.hidePostAndShowList("published"),  !1
}

, this.toggleSchedulePostModal=function(e) {
	e.preventDefault(), this.select("schedulePostSelector").toggleClass("showing")
}

, this.hideSchedulePostModal=function() {
	this.select("schedulePostSelector").removeClass("showing"), this.trigger("uiNeedsToRemoveSchedulePostButtonActiveArrow")
}

, this.removeSchedulePostModal=function() {
	this.select("schedulePostSelector").remove(), this.trigger("uiNeedsToRemoveSchedulePostButtonActiveArrow")
}

, this.toggleSchedulePostModalFixedClass=function(e, t) {
	t.shouldFix?this.select("schedulePostSelector").addClass("fixed"):this.select("schedulePostSelector").removeClass("fixed")
}

, this.saveAndQueuePost=function(e) {
	e.preventDefault(), this.select("publishPostLaterButtonSelector").text(y.t("js.scheduling")), this.disablePublishingButtons(); let t=this.getPostValuesHash(); if( !t)return this.resetSaveAndScheduleButtons(),  !1; const s=this.select("publishAtSelector").val(); return t= {
		...t, to_be_published_at:s
	}

	, this.attr.creatingPost?this.trigger("uiGetFilesAndCreatePost", {
		...t, postEvent:this.attr.createAndSchedulePostEvent, shouldPublishAfterSave:this.attr.publishAfterSave

	}):this.trigger("uiGetFilesAndUpdatePost", {
	...t, id:this.attr.post.external_id, postEvent:this.attr.updateAndSchedulePostEvent, shouldPublishAfterSave:this.attr.publishAfterSave
}), this.trigger(document, "uiNeedsToRevertPostsNav"),  !1
}

, this.showPostScheduled=function(e) {
	return e.preventDefault(), this.hideSchedulePostModal(), this.trigger("uiShowFlashMessage", {
		message:y.t("js.update_scheduled"), status:"success"
	}), this.hidePostAndShowList("scheduled"),  !1
}

, this.toggleDatePickerVisibility=function(e) {
	if( !($(e.target).closest(".js-schedule-post-box").length>0))return e.preventDefault(), e.stopPropagation(), 0===$(this.select("datePickerSelector")).find("div").length&&this.initializeDatePicker(), this.select("datePickerSelector").toggle(),  !1
}

, this.toggleEditPublishDateDatePickerVisibility=function(e) {
	return e.preventDefault(), e.stopPropagation(), 0===$(this.select("datePickerSelector")).find("div").length&&this.initializeEditPublishDateDatePicker(), this.select("datePickerPopoverSelector").attr("open", ((e, t)=>"open"===t?null:"open")),  !1
}

, this.initializeEditPublishDateDatePicker=function() {
	const e=new Date(this.attr.post.published_at); this.select("datePickerSelector").DatePicker({
		inline: !0, date:e, current:e, calendars:1, mode:"single", autoSize: !0, onRenderCell:this.disableFutureDates, onChange:this.changePublishDate.bind(this)
	})
}

, this.hideDatePicker=function(e) {
	$(e.target).closest(this.attr.datePickerPopoverSelector).length>0||this.select("datePickerPopoverSelector").removeAttr("open")
}

, this.initializeDatePicker=function() {
	const e=new Date(this.select("releaseDateSelector").val()); this.select("datePickerSelector").DatePicker({
		inline: !0, date:e, current:e, calendars:1, mode:"single", autoSize: !0, onRenderCell:this.disableInvalidDates, onChange:this.postDate.bind(this)
	})
}

, this.disableInvalidDates=function(e, t) {
	const s= {}

	; return t.setHours(0, 0, 0, 0)<(new Date).setHours(0, 0, 0, 0)&&(s.disabled= !0, s.className="datepickerInvalidDate"), s
}

, this.disableFutureDates=function(e, t) {
	const s= {}

	; return t.setHours(0, 0, 0, 0)>(new Date).setHours(0, 0, 0, 0)&&(s.disabled= !0, s.className="datepickerInvalidDate"), s
}

, this.postDate=function(e) {
	this.select("releaseDateSelector").val(this.formattedDateForTextInput(e)), this.select("datePickerSelector").toggle(), this.select("releaseDateSelector").addClass("has-date")
}

, this.changePublishDate=function(e) {
	this.select("publishDateSelector").val(this.formattedDateForTextInput(e)), this.select("datePickerPopoverSelector").removeAttr("open"), this.select("publishDateSelector").addClass("has-date")
}

, this.formattedDateForTextInput=function(e) {
	return`${e.getMonthName()} ${e.getDate()}, ${e.getFullYear()}`
}

, this.showError=function() {
	this.trigger("uiShowFlashMessage", {
		message:y.t("js.something_went_wrong"), status:"error"
	})
}

, this.resetSaveAndScheduleButtons=function() {
	this.select("publishPostLaterButtonSelector").text(y.t("js.schedule_now_prompt")), this.select("publishPostLaterButtonSelector").removeProp("disabled"), this.trigger("uiNeedsToResetPublishButtonLabel"), this.trigger("uiNeedsToResetPreviewButton"), this.select("cancelPublishButtonSelector").hide(), this.select("publishPostLaterButtonSelector").removeProp("disabled"), this.select("publishPostButtonSelector").removeProp("disabled"), this.select("publishPostButtonSelector").removeClass("show-cancel"), this.trigger("uiNeedsToPostSaveButtonCopy", {
		text:y.t("js.save")
	}), this.trigger("uiNeedsToEnableSaveButton"), this.select("productDropdownSelector").removeProp("disabled"), this.attr.editingPublishedPost||this.trigger("uiNeedsToShowSchedulePostButton")
}

, this.removeErrorClass=function() {
	this.select("productDropdownSelector").removeClass("error"), this.select("postNameSelector").removeClass("error")
}

, this.showErrorMessageAndResetButtons=function(e, t) {
	let s=y.t("js.something_went_wrong"); t&&t.error&&(s=t.error), this.trigger("uiShowFlashMessage", {
		message:s, status:"error"
	}), this.attr.shouldSendPreview= !1, this.attr.publishAfterSave= !1, this.resetSaveAndScheduleButtons()
}

, this.setEditor=function() {
	var e; const t= {
		onUpload:e=>this.uploadImage(e)
	}

	; this.attr.descriptionRef=(0, b.s)("rich-text-editor-placeholder", {
		ariaLabel:y.t("js.post_message"), placeholder:y.t("letter_message_placeholder"), initialDescriptionHtml:(null==(e=this.attr.post)?void 0:e.message)||"", imageSettings:t, hasOembedSupportEnabled: !1, name:"msg", className:"required post-message rich-text js-post-message"
	}), this.makeFilesSortable()
}

, this.showCallToActionInputs=function() {
	this.select("addCallToActionButtonSelector").hide(), this.select("callToActionButtonInputsHolder").show()
}

, this.resetParams=function() {
	window.history.pushState({}

	, document.title, window.location.pathname+window.location.hash)
}

, this.after("initialize", (function() {
			this.on(document, "uiNeedsToPreviewPostEmail", this.previewPostEmail), this.on(document, "uiNeedsToPreviewPost", this.previewPost), this.on(document, "uiNeedsToCancelPost", this.cancelPost), this.on(document, "uiNeedsToToggleSchedulePostModal", this.toggleSchedulePostModal), this.on(document, "uiNeedsToRemoveSchedulePostModal", this.removeSchedulePostModal), this.on(document, "uiNeedsToToggleSchedulePostModalFixedClass", this.toggleSchedulePostModalFixedClass), this.on(document, "uiNeedsToSavePost", this.savePost), this.on(document, "click", this.hideDatePicker), this.on("click", {
				publishPostButtonSelector:this.setPublishingFlagAndSavePost, cancelPublishButtonSelector:this.cancelPublishPost, addFilesTriggerSelector:this.showFileChooser, releaseDateSelector:this.toggleDatePickerVisibility, publishDateSelector:this.toggleEditPublishDateDatePickerVisibility, publishPostLaterButtonSelector:this.saveAndQueuePost, addCallToActionButtonSelector:this.showCallToActionInputs
			}), this.on(document, "dataPostCreated", this.postUpdated), this.on(document, "dataPostUpdated", this.postUpdated), this.on(document, "dataPostPublished", this.showPostPublished), this.on(document, "uiToShowPostScheduled", this.showPostScheduled), this.on(document, "dataPostUpdatedAndScheduled", this.showPostScheduled), this.on(document, "dataPostCreateFailed", this.showErrorMessageAndResetButtons), this.on(document, "dataPostFailedToUpdate", this.showErrorMessageAndResetButtons), this.on(document, "dataPostFailedToSchedule", this.showErrorMessageAndResetButtons), this.on(document, "dataPostFailedToPublish", this.showErrorMessageAndResetButtons), this.on(document, "dataPostDeleteFailedToUndo", this.showError), this.on(document, "dataPostFailedToDelete", this.showError), this.on(document, "dataFileUploadIsInProgress", this.disablePostButtons), this.on(document, "dataFileUploadIsDone", this.enablePostButtons), this.on(document, "dataStreamableFileWasAdded", this.showStreamOnlyOption), this.on(document, "dataFailedToPostRecipientCount", this.showError), this.on(document, "uiNeedsToUpdatePostForm", this.editPost), this.on(document, "uiNeedsToDuplicatePostForm", this.newPost), this.on(document, "uiNeedsToShowNewFollowerPostForm", this.newFollowerPost), this.on(document, "uiNeedsToShowNewPostForm", this.newPost), this.on(document, "uiNeedsToHideNewPostForm", this.hidePostAndShowList), this.on(document, "uiNeedsToToggleEmptyState", this.toggleEmptyState), this.trigger("uiHideLoadingOverlay"), ""===window.location.hash?this.hidePostAndShowList():"#new_post"===window.location.hash.split("?")[0]?this.newPost():"#new_follower_post"===window.location.hash?this.newFollowerPost():"#published"===window.location.hash?this.trigger("uiNeedsToShowPublishedTab"):"#scheduled"===window.location.hash?this.trigger("uiNeedsToShowScheduledTab"):"#draft"===window.location.hash&&this.trigger("uiNeedsToShowDraftTab"), this.initializeProductSelect()
	}))

}), w.Z, _.Z, v.Z, T.Z, j.Z); var B=s(82780), L=s(68627); const E=n()((function() {
			this.defaultAttrs({
				postsActionsHolderSelector:".js-posts-actions-holder", customerHeaderSelector:".js-customer-list-header", customerSubheadingSelector:".js-customer-subheading", showPublishedTabTriggerSelector:".js-show-published-tab-trigger", showScheduledTabTriggerSelector:".js-show-scheduled-tab-trigger", showDraftTabTriggerSelector:".js-show-drafts-tab-trigger", showWorkflowsTabTriggerSelector:".js-show-workflows-tab-trigger", postsTabSelector:".js-posts-tab", postsTableSelector:".js-posts-table", postsEmptyPlaceholderSelector:".js-posts-empty-placeholder", newPostButtonSelector:".js-new-post-trigger", newWorkflowButtonSelector:".js-new-workflow-trigger", cancelPostButtonSelector:".js-cancel-post-trigger", schedulePostButtonSelector:".js-schedule-post-modal-trigger", schedulePostButtonLabelSelector:".js-schedule-post-modal-label", publishNowButtonSelector:".js-publish-post-trigger", savePostButtonSelector:".js-save-post-trigger", publishedListHolderSelector:".js-published-list-holder", scheduledListHolderSelector:".js-scheduled-list-holder", draftListHolderSelector:".js-draft-list-holder", postFormHeaderSelector:".js-new-post-form-header", previewDropdownWrapper:".js-preview-post-dropdown-wrapper", previewPostLinkWrapper:".js-preview-post-link-wrapper", previewPostEmailLinkWrapper:".js-preview-post-email-link-wrapper", previewDropdownTriggerSelector:".js-preview-dropdown-trigger", previewPostEmailTriggerSelector:".js-preview-post-email-trigger", previewPostTriggerSelector:".js-preview-post-trigger", previewDropdownSelector:".js-preview-dropdown"

			}), this.showPublishedTab=function(e) {
			e.preventDefault(), window.location.hash="published", this.setActivePostsTableAndPlaceholder("published"), this.select("postsTabSelector").show(), this.select("publishedListHolderSelector").show(), this.select("scheduledListHolderSelector").hide(), this.select("draftListHolderSelector").hide(), this.trigger("uiNeedsToSetSentTabState"), this.select("showPublishedTabTriggerSelector").addClass("active").attr("aria-selected", "true"), this.select("showScheduledTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.select("showDraftTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.select("showWorkflowsTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.trigger(document, "uiNeedsToToggleEmptyState", {
				type:"published"

			}), this.trigger(document, "uiNeedsToResetPostsSearch", {
			type:"published"
		})
}

, this.showDraftTab=function(e) {
	e.preventDefault(), window.location.hash="draft", this.setActivePostsTableAndPlaceholder("drafts"), this.select("postsTabSelector").show(), this.select("publishedListHolderSelector").hide(), this.select("scheduledListHolderSelector").hide(), this.select("draftListHolderSelector").show(), this.trigger("uiNeedsToSetDraftTabState"), this.select("showPublishedTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.select("showScheduledTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.select("showDraftTabTriggerSelector").addClass("active").attr("aria-selected", "true"), this.select("showWorkflowsTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.trigger(document, "uiNeedsToToggleEmptyState", {
		type:"draft"

	}), this.trigger(document, "uiNeedsToResetPostsSearch", {
	type:"draft"
})
}

, this.showScheduledTab=function(e) {
	e.preventDefault(), window.location.hash="scheduled", this.setActivePostsTableAndPlaceholder("scheduled"), this.select("postsTabSelector").show(), this.select("publishedListHolderSelector").hide(), this.select("scheduledListHolderSelector").show(), this.select("draftListHolderSelector").hide(), this.trigger("uiNeedsToSetScheduledTabState"), this.select("showPublishedTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.select("showScheduledTabTriggerSelector").addClass("active").attr("aria-selected", "true"), this.select("showDraftTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.select("showWorkflowsTabTriggerSelector").removeClass("active").attr("aria-selected", "false"), this.trigger(document, "uiNeedsToToggleEmptyState", {
		type:"scheduled"

	}), this.trigger(document, "uiNeedsToResetPostsSearch", {
	type:"scheduled"
})
}

, this.showWorkflowsTab=function(e) {
	e.preventDefault(), this.select("postsTabSelector").show(), this.select("publishedListHolderSelector").hide(), this.select("scheduledListHolderSelector").hide(), this.select("draftListHolderSelector").hide(), this.trigger("uiNeedsToSetScheduledTabState"), this.select("showPublishedTabTriggerSelector").removeClass("active"), this.select("showScheduledTabTriggerSelector").removeClass("active"), this.select("showDraftTabTriggerSelector").removeClass("active"), this.select("showWorkflowsTabTriggerSelector").addClass("active"), this.trigger(document, "uiNeedsToToggleEmptyState", {
		type:"workflows"
	})
}

, this.updatePostsHeader=function() {
	const e=this.select("customerHeaderSelector"), t=$(window).scrollTop()>$(".main-customers").offset().top; t?e.addClass("fixed"):e.removeClass("fixed"), this.trigger(document, "uiNeedsToToggleSchedulePostModalFixedClass", {
		shouldFix:t
	})
}

, this.replacePostsNav=function(e, t) {
	this.select("postFormHeaderSelector").length>0?(this.select("customerHeaderSelector").hide(), this.select("postFormHeaderSelector").show()):(this.select("customerHeaderSelector").children().hide(), this.select("customerHeaderSelector").append(t.html))
}

, this.revertPostsNav=function() {
	this.select("postFormHeaderSelector").length>0?(this.select("postFormHeaderSelector").hide(), this.select("customerHeaderSelector").show()):(this.select("customerHeaderSelector").find(":visible:first").remove(), this.select("customerHeaderSelector").children().show())
}

, this.hideAllDrawers=function(e, t) {
	this.trigger("uiNeedsToHideDrawer", t)
}

, this.newPost=function(e) {
	this.select("newPostButtonSelector").attr("disabled")||(e.preventDefault(), window.location.hash="new_post", this.trigger("uiNeedsToShowNewPostForm"))
}

, this.previewPostEmail=function(e) {
	e.preventDefault(), this.trigger(document, "uiNeedsToPreviewPostEmail", e)
}

, this.previewPost=function(e) {
	e.preventDefault(), this.trigger(document, "uiNeedsToPreviewPost", e)
}

, this.cancelPost=function(e) {
	e.preventDefault(), this.trigger(document, "uiNeedsToCancelPost", e)
}

, this.savePost=function(e) {
	this.trigger(document, "uiNeedsToSavePost", e)
}

, this.toggleSchedulePostModal=function(e) {
	this.trigger(document, "uiNeedsToToggleSchedulePostModal", e), this.select("schedulePostButtonSelector").toggleClass("button-active showing-arrow")
}

, this.disableSaveButton=function(e, t) {
	this.select("savePostButtonSelector").prop("disabled", "disabled"), (null==t?void 0:t.all_buttons)&&(this.select("previewPostTriggerSelector").prop("disabled", "disabled"), this.select("previewPostEmailTriggerSelector").prop("disabled", "disabled"), this.select("schedulePostButtonSelector").prop("disabled", "disabled"))
}

, this.enableSaveButton=function(e, t) {
	this.select("savePostButtonSelector").removeProp("disabled"), (null==t?void 0:t.all_buttons)&&(this.select("previewPostTriggerSelector").removeProp("disabled"), this.select("previewPostEmailTriggerSelector").removeProp("disabled"), this.select("schedulePostButtonSelector").removeProp("disabled"))
}

, this.updateSaveButtonCopy=function(e, t) {
	this.select("schedulePostButtonSelector").text(t.text)
}

, this.showSchedulePostButton=function() {
	this.select("schedulePostButtonSelector").closest("details").show(), this.select("schedulePostButtonSelector").show()
}

, this.hideSchedulePostButton=function() {
	this.select("schedulePostButtonSelector").closest("details").hide(), this.select("schedulePostButtonSelector").hide()
}

, this.removeSchedulePostButtonActiveArrow=function() {
	this.select("schedulePostButtonSelector").removeClass("button-active showing-arrow")
}

, this.updatePublishButtonLabel=function(e, t) {
	this.select("schedulePostButtonLabelSelector").text(t.label), this.select("publishNowButtonSelector").text(`${t.label} ${L.t("js.now")}`)
}

, this.togglePreviewDropdown=function(e) {
	return e.preventDefault(), this.select("previewDropdownSelector").toggleClass("open"),  !1
}

, this.showPreviewButtonDropdown=function() {
	this.select("previewDropdownWrapper").show(), this.select("previewPostEmailLinkWrapper").hide(), this.select("previewPostLinkWrapper").hide()
}

, this.showPreviewButtonLink=function(e, t) {
	"post"===t.previewLink?(this.select("previewPostLinkWrapper").show(), this.select("previewPostEmailLinkWrapper").hide()):(this.select("previewPostEmailLinkWrapper").show(), this.select("previewPostLinkWrapper").hide()), this.select("previewDropdownWrapper").hide()
}

, this.setActivePostsTableAndPlaceholder=function(e) {
	let t=this.select("publishedListHolderSelector"); "scheduled"===e?t=this.select("scheduledListHolderSelector"):"drafts"===e&&(t=this.select("draftListHolderSelector")), this.attr.activePostsTable=t.find(this.attr.postsTableSelector), this.attr.activePostsEmptyPlaceholder=t.find(this.attr.postsEmptyPlaceholderSelector)
}

, this.showPostsTabAsEmpty=function() {
	const e=window.location.hash.substring(1); (0, B.is)(e, [9, [8, "draft"], [8, "published"], [8, "scheduled"]])&&(this.resetPostsTab(), this.attr.activePostsTable.hide(), this.attr.activePostsEmptyPlaceholder.find("h2").text(L.t(`js.no_${e}_posts_found`)), this.attr.activePostsEmptyPlaceholder.find(this.attr.newPostButtonSelector).hide(), this.attr.activePostsEmptyPlaceholder.show(), this.select("postsTabSelector").addClass("empty"))
}

, this.showPostsTabAsLoading=function() {
	const e=window.location.hash.substring(1); (0, B.is)(e, [9, [8, "draft"], [8, "published"], [8, "scheduled"]])&&(this.resetPostsTab(), this.attr.activePostsTable.hide(), this.attr.activePostsEmptyPlaceholder.find("h2").text(L.t(`js.${e}_posts_empty_heading`)), this.attr.activePostsEmptyPlaceholder.find(this.attr.newPostButtonSelector).show(), this.attr.activePostsEmptyPlaceholder.hide(), this.select("postsTabSelector").addClass("loading"))
}

, this.resetPostsTab=function() {
	this.attr.activePostsTable.show(), this.select("postsTabSelector").removeClass("empty loading")
}

, this.showSearchPostsError=function() {
	this.trigger("uiShowFlashMessage", {
		message:L.t("js.something_went_wrong"), status:"error"
	}), this.trigger("uiNeedsToResetPosts"), this.trigger("uiNeedsToShowPostsEmpty")
}

, this.after("initialize", (function() {
			this.on("click", {
				showPublishedTabTriggerSelector:this.showPublishedTab, showScheduledTabTriggerSelector:this.showScheduledTab, showDraftTabTriggerSelector:this.showDraftTab, showWorkflowsTabTriggerSelector:this.showWorkflowsTab, newPostButtonSelector:this.newPost, previewPostEmailTriggerSelector:this.previewPostEmail, previewPostTriggerSelector:this.previewPost, cancelPostButtonSelector:this.cancelPost, savePostButtonSelector:this.savePost, schedulePostButtonSelector:this.toggleSchedulePostModal, previewDropdownTriggerSelector:this.togglePreviewDropdown
			}), this.on(document, "uiNeedsToShowPublishedTab", this.showPublishedTab), this.on(document, "uiNeedsToShowScheduledTab", this.showScheduledTab), this.on(document, "uiNeedsToShowDraftTab", this.showDraftTab), this.on(document, "uiNeedsToShowWorkflowsTab", this.showWorkflowsTab), this.on(document, "uiNeedsToHideAllDrawers", this.hideAllDrawers), this.on(window, "scroll", this.updatePostsHeader), this.on(document, "uiNeedsToDisableSaveButton", this.disableSaveButton), this.on(document, "uiNeedsToEnableSaveButton", this.enableSaveButton), this.on(document, "uiNeedsToReplacePostsNav", this.replacePostsNav), this.on(document, "uiNeedsToRevertPostsNav", this.revertPostsNav), this.on(document, "uiNeedsToShowPreviewButtonDropdown", this.showPreviewButtonDropdown), this.on(document, "uiNeedsToShowPreviewButtonLink", this.showPreviewButtonLink), this.on(document, "uiNeedsToUpdatePublishButtonLabel", this.updatePublishButtonLabel), this.on(document, "uiNeedsToUpdateSaveButtonCopy", this.updateSaveButtonCopy), this.on(document, "uiNeedsToShowSchedulePostButton", this.showSchedulePostButton), this.on(document, "uiNeedsToHideSchedulePostButton", this.hideSchedulePostButton), this.on(document, "uiNeedsToRemoveSchedulePostButtonActiveArrow", this.removeSchedulePostButtonActiveArrow), this.on(document, "uiNeedsToShowPostsLoading", this.showPostsTabAsLoading), this.on(document, "uiNeedsToShowPostsEmpty", this.showPostsTabAsEmpty), this.on(document, "uiNeedsToResetPosts", this.resetPostsTab), this.on(document, "uiNeedsToShowPostsSearchError", this.showSearchPostsError)
	}))

})); var C=s(42243); const x=n()((function() {
			this.defaultAttrs({
				fileSelector:"#update_file", guidInputSelector:"input[name=attachment_guid]", uiUploadWithCorsEvent:"uiNeedsToUploadPostFileWithCors"

			}), this.buildPost=function(e) {
			const t=e.files; return void 0 !==e.streamOnly&&Object.values(t).filter((e=>e.is_streamable)).forEach((t=> {
						t.stream_only=e.streamOnly

					})), {
			name:e.name, message:e.message, removed_image_urls:Array.from(e.removedImageUrls), files:t, subtitles:e.subtitleFiles, call_to_action_text:e.callToActionText, call_to_action_url:e.callToActionUrl, variant_external_id:e.variantExternalId, installment_type:e.recipientType, not_bought_products:e.notBoughtProducts, not_bought_variants:e.notBoughtVariants, paid_more_than:e.paidMoreThan, paid_less_than:e.paidLessThan, created_after:e.createdAfterDate, created_before:e.createdBeforeDate, from_country:e.fromCountry, shown_on_profile:e.shownOnProfile, send_emails:e.sendEmails, bought_products:e.boughtProducts, bought_variants:e.boughtVariants, affiliate_products:e.affiliateProducts, allow_comments:e.allowComments
		}
	}

	, this.createPost=function(e, t) {
		this.trigger(t.postEvent, {
			post:this.buildPost(t), permalink:t.permalink, to_be_published_at:t.to_be_published_at, should_send_preview:t.shouldSendPreview, should_publish_after_save:t.shouldPublishAfterSave
		})
}

, this.updatePost=function(e, t) {
	const s=this.buildPost(t); s.installment_type=t.recipientType, s.permalink=t.permalink, t.publishedAt&&(s.published_at=t.publishedAt), this.trigger(t.postEvent, {
		post:s, id:t.id, permalink:t.permalink, to_be_published_at:t.to_be_published_at, should_send_preview:t.shouldSendPreview, should_publish_after_save:t.shouldPublishAfterSave
	})
}

, this.saveFileNameAndUploadFile=function(e) {
	const t=this.getFileInputFromEvent(e); this.attr.fileName=this.getFileNameFromInput(t), this.uploadFile(e)
}

, this.after("initialize", (function() {
			this.on("change", {
				fileSelector:this.saveFileNameAndUploadFile
			}), this.on(document, "uiGetFilesAndUpdatePost", this.updatePost), this.on(document, "uiGetFilesAndCreatePost", this.createPost)
	}))

}), C.Z); var A=s(65352), F=s.n(A); const k=n()((function() {
			this.defaultAttrs({
				searchQueryInputSelector:".js-search-posts-input", showOriginalPostsDelay:300, startPostsSearchDelay:500, currentPage:0, minQueryLength:3, lastSearchQuery:"", refetchOriginalPosts: !1

			}), this.resetSearchPosts=function(e, t) {
			this.select("searchQueryInputSelector").data("type", t.type).val(""), (this.attr.lastSearchQuery||this.attr.refetchOriginalPosts)&&(this.attr.lastSearchQuery="", this.attr.currentPage=0, this.attr.refetchOriginalPosts&&(this.trigger("uiNeedsToRemovePosts"), this.trigger("uiNeedsToShowPostsLoading"), setTimeout((()=> {
								this.trigger("uiNeedsToLoadMorePosts", {
									currentPage:this.attr.currentPage, type:t.type
								}), this.trigger("uiNeedsToResetPosts"), this.attr.refetchOriginalPosts= !1
						}), this.attr.showOriginalPostsDelay)), this.attr.refetchOriginalPosts= !0)
	}

	, this.focusPostsSearchInput=function() {
		this.select("searchQueryInputSelector").trigger("focus")
	}

	, this.startPostSearch=function(e) {
		const t=$(e.target).val(); if(t !==this.attr.lastSearchQuery) {
			if(this.attr.currentPage=0, this.trigger("uiNeedsToRemovePosts"), t.length<this.attr.minQueryLength)return this.trigger("uiNeedsToRemovePosts"), this.trigger("uiNeedsToShowPostsLoading"), void setTimeout((()=> {
						this.trigger("uiNeedsToLoadMorePosts", {
							currentPage:this.attr.currentPage, type:(0, B.pj)(this.select("searchQueryInputSelector").data("type"), [9, [8, "draft"], [8, "published"], [8, "scheduled"]])
						}), this.trigger("uiNeedsToResetPosts")
				}), this.attr.showOriginalPostsDelay); this.attr.lastSearchQuery=t, this.performPostSearch()
	}
}

, this.performPostSearch=function() {
	this.attr.currentPage+=1, this.trigger("uiNeedsToShowPostsLoading"), this.trigger("uiNeedsToSearchPosts", {
		query:this.attr.lastSearchQuery, page:this.attr.currentPage, type:(0, B.pj)(this.select("searchQueryInputSelector").data("type"), [9, [8, "draft"], [8, "published"], [8, "scheduled"]])
	})
}

, this.after("initialize", (function() {
			this.on("keyup", {
				searchQueryInputSelector:F()(this.startPostSearch, this.attr.startPostsSearchDelay)
			}), this.on(document, "searchBoxPopoverOpen", this.focusPostsSearchInput), this.on(document, "uiNeedsToResetPostsSearch", this.resetSearchPosts), this.on(document, "uiNeedsToPerformSearchPosts", this.performPostSearch)
	}))

})); var H=s(47732), M=s(11422), R=s(14333), I=s(90965), O=s(44291), U=s(68627); const z=(0, R.z)({
	component:e=>M.createElement(O.J, {
		className:"js-preview-post-dropdown-wrapper", trigger:e=>M.createElement("button", {
			"aria-label":U.t("js.toggle_preview_post_dropdown_label"), ...e
		}

		, M.createElement(I.J, {
			name:"eye-fill"

		}), U.t("js.preview"), M.createElement(I.J, {
		name:"outline-cheveron-down"
	}))
}

, M.createElement("div", {
	style: {
		display:"grid", gap:"var(--spacer-3)"
	}
}

, M.createElement("button", {
	className:"js-preview-post-trigger"
}

, M.createElement(I.J, {
	name:"file-earmark-medical-fill"

}), U.t("js.preview_post")), M.createElement("button", {
	className:"js-preview-post-email-trigger"
}

, M.createElement(I.J, {
	name:"envelope-fill"
}), U.t("js.preview_email")))), propParser:(0, B.rO)([5])

}); var W=s(52333), J=s(68627); const Q=(0, R.z)({
	component:e=> {
		const t=new Date; t.setHours(t.getHours()+1); const s=new Intl.DateTimeFormat([], {
			month:"long", day:"numeric", year:"numeric"

		}), o=new Intl.DateTimeFormat([], {
		hour:"numeric"

	}), [i, r]=M.useState(t), [l, a]=M.useState((e=> {
			const t=e.getHours(); return`${t%12||12}${t>=12?"PM":"AM"}`

		})(t)), [n, h]=M.useState( !1), d=`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()} ${l}`; return M.createElement(O.J, {
	className:"js-schedule-post-box", trigger:e=>M.createElement("button", {
		"aria-label":J.t("js.toggle_publish_post_dropdown_label"), ...e
	}

	, M.createElement("span", {
		className:"js-schedule-post-modal-label"
	}

	, J.t("js.publish")), M.createElement(I.J, {
	name:"outline-cheveron-down"
}))
}

, M.createElement("div", {
	style: {
		display:"grid", gap:"var(--spacer-3)"
	}
}

, M.createElement("div", {
	style: {
		display:"grid", gridTemplateColumns:"1fr max-content"
	}
}

, M.createElement("button", {
	className:"accent js-publish-post-trigger"
}

, J.t("js.publish_now")), M.createElement("button", {
	className:"js-cancel-publish-post-trigger", style: {
		display:"none", marginLeft:"var(--spacer-2)"
	}
}

, M.createElement(I.J, {
	name:"solid-x"

}))), M.createElement("div", {
	role:"separator"
}

, J.t("js.or")), M.createElement("fieldset", {
	style: {
		display:"grid", gridTemplateColumns:"2fr 1fr"
	}
}

, M.createElement("input", {
	className:"js-schedule-post-publish-at", type:"hidden", value:d, readOnly: !0

}), M.createElement(O.J, {
	trigger:e=>M.createElement("input", {
		className:"datepicker-calendar-input js-schedule-post-input-date", type:"text", value:s.format(i), readOnly: !0, ...e
	}), open:n, onToggle:h
}

, M.createElement(W.M, {
	isShowing:n, date:i, onChangeDate:e=> {
		r(e), h( !1)
	}

	, onRequestHide:()=>h( !1), style: {
		display:"contents"
	}

})), M.createElement("select", {
	"aria-label":J.t("js.publish_post_time_select_label"), value:l, onChange:({
		target: {
			value:e
		}
	})=>a(e)
}

, [...Array(24)].map(((e, s)=> {
			t.setHours(s); const i=`${s%12||12}${s>=12?"PM":"AM"}`; return M.createElement("option", {
				key:i, value:i
			}

			, o.format(t))

	})))), M.createElement("button", {
	className:"js-schedule-post-trigger"
}

, J.t("js.schedule_now_prompt"))))
}

, propParser:(0, B.rO)([5])

}); var Y=s(8353); s(17353); H.Z.initialize(), $(".js-date-picker").DatePicker(), E.attachTo(document), l.Z.attachTo(document), k.attachTo(".js-search-box"), u.attachTo(document), D.attachTo(document), x.attachTo(".js-create-post-form"), r.Z.attachTo(document), i().register({
	SearchPopover:Y.Z, PostsPreviewPopover:z, PostsPublishPopover:Q
})
}

, 50136:(e, t, s)=> {
	"use strict"; s.d(t, {
		Z:()=>i

	}); var o=s(19662); const i=s.n(o)()((function() {
			this.defaultAttrs({
				toggleSearchBoxTriggerSelector:".js-toggle-search-box", searchBoxSelector:".js-search-box"

			}), this.hideBoxesIfEscapeIsPressed=function(e) {
			"Escape"===e.key&&this.hideBoxes()
		}

		, this.hideBoxesIfClickedOutsideBoxes=function(e) {
			const t=e.target; 0===this.select("searchBoxSelector").has(t).length&&0===this.select("toggleSearchBoxTriggerSelector").has(t).length&&this.hideBoxes()
		}

		, this.hideBoxes=function() {
			this.select("searchBoxSelector").removeClass("showing").removeAttr("open"), this.select("toggleSearchBoxTriggerSelector").removeClass("showing-arrow")
		}

		, this.toggleSearchBox=function(e) {
			e.preventDefault(); const t=this.select("searchBoxSelector").hasClass("showing"); return this.hideBoxes(), t||(this.select("searchBoxSelector").addClass("showing").attr("open", "true"), this.select("toggleSearchBoxTriggerSelector").addClass("showing-arrow"), this.trigger("searchBoxPopoverOpen")),  !1
		}

		, this.after("initialize", (function() {
					this.on("click", {
						toggleSearchBoxTriggerSelector:this.toggleSearchBox
					}), this.on(document, "keydown", this.hideBoxesIfEscapeIsPressed), this.on(document, "mouseup", this.hideBoxesIfClickedOutsideBoxes), this.on(document, "touchend", this.hideBoxesIfClickedOutsideBoxes)
			}))
}))
}

, 82669:(e, t, s)=> {
	var o=s(70818); function i(e) {
		return e&&(e.__esModule?e.default:e)
	}

	e.exports=(o.default||o).template({
		compiler:[8, ">= 4.3.0"], main:function(e, t, o, r, l) {
			var a=null !=t?t:e.nullContext|| {}

			, n=e.escapeExpression; return'<div class="js-customer-primary-menu">\n  <div class="container row relative">\n    <div class="row">\n      <ul class="customer-actions js-customer-actions-holder">\n        <li class="js-preview-post-dropdown-wrapper secondary-navigation__trigger">\n          <ul class="navigation-preview navigation-dropdown-group--preview js-preview-dropdown">\n            <li class="preview-dropdown-trigger">\n              <a class="js-preview-dropdown-trigger button button-default" href="#">Preview\n                <div class="button-dropdown-indicator">â–¾</div>\n              </a>\n              <ul class="tooltip--from-top-right dropdown navigation-dropdown--preview">\n                <li>\n                  <a href="#" class="js-preview-post-trigger">' +n(i(s(63994)).call(a, "preview_post", {
					name:"t", hash: {}

					, data:l, loc: {
						start: {
							line:13, column:62
						}

						, end: {
							line:13, column:82
						}
					}

				}))+'</a>\n                </li>\n                <li>\n                  <a href="#" class="js-preview-post-email-trigger">' +n(i(s(63994)).call(a, "preview_email", {
				name:"t", hash: {}

				, data:l, loc: {
					start: {
						line:16, column:68
					}

					, end: {
						line:16, column:89
					}
				}

			}))+'</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li class="js-preview-post-link-wrapper secondary-navigation__trigger">\n          <a href="#" class="js-preview-post-trigger button button-default">' +n(i(s(63994)).call(a, "preview", {
			name:"t", hash: {}

			, data:l, loc: {
				start: {
					line:23, column:76
				}

				, end: {
					line:23, column:91
				}
			}

		}))+'</a>\n        </li>\n        <li class="js-preview-post-email-link-wrapper secondary-navigation__trigger">\n          <a href="#" class="js-preview-post-email-trigger button button-default">' +n(i(s(63994)).call(a, "preview", {
		name:"t", hash: {}

		, data:l, loc: {
			start: {
				line:26, column:82
			}

			, end: {
				line:26, column:97
			}
		}

	}))+'</a>\n        </li>\n        <li class="secondary-navigation__actions">\n          <ul class="new-post-actions">\n            <li class="with-link">\n              <a href="#" class="js-cancel-post-trigger">' +n(i(s(63994)).call(a, "cancel", {
		name:"t", hash: {}

		, data:l, loc: {
			start: {
				line:31, column:57
			}

			, end: {
				line:31, column:71
			}
		}

	}))+'</a>\n            </li>\n            <li class="new-post-buttons">\n              <button class="button button-default js-save-post-trigger relative">' +n(i(s(63994)).call(a, "save", {
		name:"t", hash: {}

		, data:l, loc: {
			start: {
				line:34, column:82
			}

			, end: {
				line:34, column:94
			}
		}

	}))+'</button>\n              <button class="button button-primary js-schedule-post-modal-trigger relative"><span class="js-schedule-post-modal-label">' +n(i(s(63994)).call(a, "send", {
		name:"t", hash: {}

		, data:l, loc: {
			start: {
				line:35, column:135
			}

			, end: {
				line:35, column:147
			}
		}
	}))+'</span> <div class="button-dropdown-indicator">&#9662;</div></button>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n'
}

, useData: !0
})
}
}

, e=> {
	e.O(0, [8782, 3430], (()=> {
				return t=61235, e(e.s=t); var t
			})); e.O()
}

]);