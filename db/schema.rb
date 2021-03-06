# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170221200815) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "givings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "pledge_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "givings", ["pledge_id"], name: "index_givings_on_pledge_id", using: :btree
  add_index "givings", ["user_id"], name: "index_givings_on_user_id", using: :btree

  create_table "pledges", force: :cascade do |t|
    t.integer  "project_id",  null: false
    t.integer  "level",       null: false
    t.string   "title",       null: false
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "pledges", ["project_id"], name: "index_pledges_on_project_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.string   "title",              null: false
    t.string   "subtitle",           null: false
    t.text     "body",               null: false
    t.date     "end_date",           null: false
    t.string   "category",           null: false
    t.string   "location",           null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "goal",               null: false
  end

  add_index "projects", ["user_id"], name: "index_projects_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "location"
    t.string   "name",               null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
