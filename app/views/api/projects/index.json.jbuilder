@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    json.owner_name project.user.username
    json.sum_total
    json.days_left

    sum_total = 0

    project.pledges.each do |pledge|
      sum_total += pledge.level * (pledge.givings.count)
    end

    json.sum_total sum_total

    percent = (sum_total / project.goal) * 100
    json.percent percent

    json.days_left project.end_date

  end
end
