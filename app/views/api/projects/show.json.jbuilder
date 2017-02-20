
json.partial! '/api/projects/project', project: @project

json.owner_name @project.user.username

json.owner_pic asset_path(@project.user.image.url)

json.days_left (Date.today - @project.end_date)

json.pledges @project.pledges
