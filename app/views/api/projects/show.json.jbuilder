
json.partial! '/api/projects/project', project: @project

json.owner_name @project.user.username

json.owner_pic asset_path(@project.user.image.url)

json.days_left @project.end_date


json.backers @project.givings.count

sum_total = 0

json.pledges @project.pledges.each do |pledge|
  sum_total += pledge.level * (pledge.givings.count)

  json.id pledge.id
  json.giving_count pledge.givings.count

  json.project_id pledge.project_id
  json.title pledge.title
  json.level pledge.level
  json.description pledge.description
end

json.sum_total sum_total

percent = (sum_total / @project.goal) * 100
json.percent percent
